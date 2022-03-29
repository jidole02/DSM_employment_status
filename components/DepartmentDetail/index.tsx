import styled from "@emotion/styled";
import { Fragment, useEffect, useState } from "react";
import { arr } from "./arr";
import DepartmentCard from "./Card";

interface Props {
  setMenuIndex(a: number): void;
}

export default function DepartmentDetail({ setMenuIndex }: Props) {
  const [nowIndex, setNowIndex] = useState(0);
  const [list, setList] = useState(arr);
  useEffect(() => {
    let index = 0;
    setInterval(() => {
      arr.push(arr[index % 4]);
      setMenuIndex((index + 1) % 4);
      setList(arr);
      setNowIndex(index + 1);
      index++;
    }, 5000);
  }, []);
  return (
    <Wrapper>
      {list.map((_, index) => (
        <Fragment key={index}>
          {index - nowIndex >= 0 && (
            <DepartmentCard index={index - nowIndex} contents={_} />
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
