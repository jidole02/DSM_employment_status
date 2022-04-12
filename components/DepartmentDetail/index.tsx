import styled from "@emotion/styled";
import { Fragment, useEffect, useState } from "react";
import DepartmentCard from "./Card";
import { Department } from "./../../interface/index";

interface Props {
  setMenuIndex(a: number): void;
  departments: Department[];
}

export default function DepartmentDetail({ setMenuIndex, departments }: Props) {
  let arr = departments;
  const [tempArr, setTempArr] = useState([0, 1, 2, 3]);
  useEffect(() => {
    let arr = tempArr;
    let index = 0;
    setInterval(() => {
      setMenuIndex(index % 4);
      index++;
      const temp = arr[0];
      arr.shift();
      arr.push(temp);
      setTempArr(arr);
    }, 5000);
  }, []);
  return (
    <Wrapper>
      {arr.map((_, index) => (
        <DepartmentCard index={index} arr={tempArr} contents={_} key={index} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  position: relative;
`;
