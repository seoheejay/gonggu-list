/* 공구 리스트 — 오프라인 지원 서비스워커
   전략: stale-while-revalidate
   → 캐시에 있으면 즉시 보여주고(오프라인에서도 열림),
     뒤에서 몰래 새 버전을 받아 캐시를 갱신한다(다음에 열면 최신). */

const CACHE = "gonggu-v3";
const SHELL = [
  "./",
  "./index.html",
  "./data.js",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      // 하나라도 실패하면 전체가 실패하는 addAll 대신 개별 처리
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(req).then(cached => {
        const network = fetch(req)
          .then(res => {
            if (res && res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached || (req.mode === "navigate" ? cache.match("./index.html") : undefined));

        return cached || network;
      })
    )
  );
});
