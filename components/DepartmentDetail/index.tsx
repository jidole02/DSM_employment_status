import styled from "@emotion/styled";
import { Fragment, useEffect, useState } from "react";
import DepartmentCard from "./Card";

export default function DepartmentDetail() {
  const [nowIndex, setNowIndex] = useState(0);
  let arr = [
    "https://img4.yna.co.kr/photo/yna/YH/2017/09/22/PYH2017092216660001300_P4.jpg",
    "http://www.anewsa.com/news_images/2016/10/20/mark/20161020143111.jpg",
    "https://i.ytimg.com/vi/uTZaPdXB3aY/maxresdefault.jpg",
    "https://static.news.zumst.com/images/51/2017/09/23/b30697bd4ef44f62a59be38697b3cb12.jpg",
  ];
  const [list, setList] = useState(arr);
  useEffect(() => {
    let index = 0;
    setInterval(() => {
      arr.push(arr[index % 4]);
      setList(arr);
      setNowIndex(index + 1);
      index++;
    }, 10000);
  }, []);
  return (
    <Wrapper>
      {list.map((_, index) => (
        <Fragment key={index}>
          {index - nowIndex >= 0 && (
            <DepartmentCard index={index - nowIndex} src={_} />
          )}
        </Fragment>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  position: relative;
`;
