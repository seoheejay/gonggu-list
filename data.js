/* ============================================================
   공구 리스트 — 기본 데이터
   ------------------------------------------------------------
   이 파일만 고치면 앱의 기본 데이터가 바뀝니다.

   [ 수정하는 법 ]
   1. 아래 groups 안을 고친다 (공구 추가/품목 추가)
   2. 맨 위 version 숫자를 1 올린다   ← 이걸 안 올리면 반영 안 됨
   3. git push
   → 앱에서 "새 데이터가 있어요" 배너가 뜨고, 누르면 반영됩니다.
     사용자가 앱에서 직접 추가한 공구·품목은 그대로 보존됩니다.

   [ 주의 ]
   - id 는 절대 바꾸지 마세요. 갱신할 때 같은 항목인지 구분하는 기준입니다.
     새 항목을 넣을 땐 겹치지 않는 새 id 를 아무렇게나 지어 주면 됩니다.
   - type: "host"   = 내가 연 공구      (마지막 열 = 선점자)
     type: "joined" = 내가 참여한 공구  (마지막 열 = 공구주)
   - 총계는 갯수 × 단가로 자동 계산되니 따로 적지 않습니다.
   - 선점자가 여러 명이면 ["윤서연", "공구주"] 처럼 나열하면 됩니다.

   [ 선택 항목 ] — 공구에 아래 필드를 더해도 됩니다
   - chatUrl:      "https://open.kakao.com/..."  오픈채팅방 링크
   - shipIntl:     19800   해외 배송비 (해배비)
   - shipDomestic: 1200    일본 내 배송비 (일내비)
     → 두 배송비는 공구 전체 갯수로 나눠져 품목별 분담액으로 표시됩니다.
   완료 여부·배송 정보는 앱에서만 관리하며 이 파일에 적지 않습니다.
   ============================================================ */

window.GONGGU_DATA = {
  version: 2,

  groups: [
    {
      id: "g-1002-ghost",
      title: "10/2 유령 공구",
      date: "2025-10-02",
      type: "host",
      items: [
        { id: "i-1002-1", name: "유령 치이카와", qty: 1, price: 21000, holders: ["홍길동"] },
        { id: "i-1002-2", name: "유령 하치와레", qty: 1, price: 21000, holders: ["공구주"] },
        { id: "i-1002-3", name: "유령 우사기",   qty: 2, price: 21000, holders: ["최지우", "김철수"] }
      ]
    },

    {
      id: "g-0925-halloween",
      title: "9/25 할로윈 마코 공구",
      date: "2025-09-25",
      type: "host",
      items: [
        { id: "i-0925-1", name: "딸기 랏코",        qty: 1, price: 19800, holders: ["홍길동"] },
        { id: "i-0925-2", name: "간호사 하치와레",  qty: 1, price: 19800, holders: ["김철수"] },
        { id: "i-0925-3", name: "완두콩 쿠리만쥬",  qty: 1, price: 19800, holders: ["이영희"] },
        { id: "i-0925-4", name: "간호사 치이카와",  qty: 1, price: 19800, holders: ["박민수"] },
        { id: "i-0925-5", name: "의사 우사기",      qty: 1, price: 19800, holders: ["공구주"] }
      ]
    },

    {
      id: "g-0916-sajwo",
      title: "9/16 사줘 공구",
      date: "2025-09-16",
      type: "host",
      items: [
        { id: "i-0916-1", name: "사줘 치이카와",   qty: 1, price: 17500, holders: ["윤서연", "공구주"] },
        { id: "i-0916-2", name: "사줘 하치와레",   qty: 1, price: 17500, holders: ["정수빈"] }
      ]
    },

    {
      id: "g-0821-choco",
      title: "8/21 초코박스 소분 공구",
      date: "2025-08-21",
      type: "host",
      items: [
        { id: "i-0821-1", name: "초코치이",      qty: 1, price: 12000, holders: ["정수빈"] },
        { id: "i-0821-2", name: "초코 하치",     qty: 1, price: 12000, holders: ["홍길동"] },
        { id: "i-0821-3", name: "생크림 치이",   qty: 1, price: 12000, holders: ["이영희"] }
      ]
    },

    {
      id: "g-etc",
      title: "기타 공구 리스트",
      date: "2025-07-01",
      type: "host",
      items: [
        { id: "i-etc-1", name: "엔젤 치이카와",  qty: 1, price: 23000, holders: ["최지우"] },
        { id: "i-etc-2", name: "엔젤 우사기",    qty: 1, price: 23000, holders: ["공구주"] }
      ]
    },

    {
      id: "g-joined",
      title: "참여 공구 (소비 리스트)",
      date: "2025-09-10",
      type: "joined",
      items: [
        { id: "i-joined-1", name: "모찌모찌 치이카와", qty: 1, price: 28000, holders: ["홍길동님"] },
        { id: "i-joined-2", name: "파자마 하치와레",   qty: 1, price: 26500, holders: ["김철수님"] }
      ]
    }
  ]
};
