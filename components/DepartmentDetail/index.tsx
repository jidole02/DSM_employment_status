import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import DepartmentCard from "./Card";

export default function DepartmentDetail() {
  const arr = [
    "https://img4.yna.co.kr/photo/yna/YH/2017/09/22/PYH2017092216660001300_P4.jpg",
    "http://www.anewsa.com/news_images/2016/10/20/mark/20161020143111.jpg",
    "https://i.ytimg.com/vi/uTZaPdXB3aY/maxresdefault.jpg",
    "https://static.news.zumst.com/images/51/2017/09/23/b30697bd4ef44f62a59be38697b3cb12.jpg",
  ];
  return (
    <Wrapper>
      {arr.map((_, index) => (
        <DepartmentCard index={index} src={_} key={index} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  position: relative;
`;
