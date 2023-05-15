export const FilterBtnData = [
  {
    id: 0,
    title: "카테고리",
    query: "category",
    subTab: [
      { data: "all", query: "category", name: "전체 보기" },
      { data: 1, query: "category", name: "푸드" },
      { data: 2, query: "category", name: "패션" },
      { data: 3, query: "category", name: "사진" },
      { data: 4, query: "category", name: "공예" },
      { data: 5, query: "category", name: "테크" },
    ],
  },
  {
    id: 1,
    title: "상태",
    query: "status",
    subTab: [
      { data: "all", query: "status", name: "전체 프로젝트" },
      { data: "onGoing", query: "status", name: "진행중인 프로젝트" },
      { data: "confirm", query: "status", name: "성사된 프로젝트" },
      { data: "prelaunching", query: "status", name: "공개예정 프로젝트" },
    ],
  },
  {
    id: 2,
    title: "달성률",
    query: "percentage",
    subTab: [
      { data: "all", query: "achieve", title: "전체보기" },
      { data: "under75", query: "achieve", title: "75% 이하" },
      { data: "under100", query: "achieve", title: "75% ~ 100%" },
      { data: "100up", query: "achieve", title: "100% 이상" },
    ],
  },
  {
    id: 3,
    title: "모인금액",
    query: "tatalAmount",
    subTab: [
      { data: "all", query: "tatalAmount", title: "전체보기" },
      { data: "under1m", query: "tatalAmount", title: "1백만원 이하" },
      { data: "under10m", query: "tatalAmount", title: "1백만원 ~ 1천만원" },
      { data: "under50m", query: "tatalAmount", title: "1천만원 ~ 5천만원" },
      { data: "under100m", query: "tatalAmount", title: "5천만원 ~ 1억원" },
      { data: "100mup", query: "tatalAmount", title: "1억원 이상" },
    ],
  },
];

export const sortData = [
  {
    id: 4,
    title: "정렬",
    query: "sort",
    subTab: [
      { data: "popular", query: "sort", title: "인기순" },
      { data: "publishedAt", query: "sort", title: "최신순" },
      { data: "endedAt", query: "sort", title: "마감임박순" },
    ],
  },
];
