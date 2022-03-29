export interface CardContents {
  src: string;
  departmentName: string;
  percent: number;
  personalPersonCnt: number;
  confirmPersonCnt: number;
  teacherName: string;
  description: string;
}

export let arr: CardContents[] = [
  {
    src: "https://img4.yna.co.kr/photo/yna/YH/2017/09/22/PYH2017092216660001300_P4.jpg",
    departmentName: "소프트웨어 개발 1반",
    percent: 85.4,
    personalPersonCnt: 20,
    confirmPersonCnt: 14,
    teacherName: "박정애",
    description: "SW를 개발하고 운영체제 및 네트워크를 학습합니다.",
  },
  {
    src: "https://i.ytimg.com/vi/uTZaPdXB3aY/maxresdefault.jpg",
    departmentName: "소프트웨어 개발 2반",
    percent: 85.4,
    personalPersonCnt: 20,
    confirmPersonCnt: 14,
    teacherName: "박정애",
    description: "SW를 개발하고 운영체제 및 네트워크를 학습합니다.",
  },
  {
    src: "http://www.anewsa.com/news_images/2016/10/20/mark/20161020143111.jpg",
    departmentName: "임베디드 개발과",
    percent: 85.4,
    personalPersonCnt: 20,
    confirmPersonCnt: 14,
    teacherName: "김광석",
    description: "임베디드 SW를 개발하고 리눅스를 학습합니다.",
  },
  {
    src: "https://static.news.zumst.com/images/51/2017/09/23/b30697bd4ef44f62a59be38697b3cb12.jpg",
    departmentName: "정보보안과",
    percent: 85.4,
    personalPersonCnt: 20,
    confirmPersonCnt: 14,
    teacherName: "이동욱",
    description: "정보 보안 및 해킹에 관한 내용을 학습합니다.",
  },
];
