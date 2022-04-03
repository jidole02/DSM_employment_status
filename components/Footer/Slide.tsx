import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";
import { Company } from "../../interface";

interface Props {
  companys: Company[];
}

export default function Slide({ companys }: Props) {
  let arr = companys;
  const [list, setList] = useState(arr);
  const [moveValue, setMoveValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      arr.concat(arr);
      setList((value) => [...value].concat(arr));
    }, 3000);
    let i = 1;
    setMoveValue(i);
    setInterval(() => {
      setMoveValue(i + 1);
      i++;
    }, 1000);
  }, []);
  return (
    <Wrapper>
      <Container style={{ transform: `translateX(-${moveValue * 40}px)` }}>
        {list.map((_, index) => (
          <div key={index}>
            <h3>{_.name}</h3>
            <span>{_.region}</span>
          </div>
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 30px;
`;

const Container = styled.div`
  display: flex;
  gap: 100px;
  transition: 1s linear;
  & div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    & h3 {
      font-size: 20px;
      font-weight: 500;
      white-space: nowrap;
    }
    & span {
      font-size: 14px;
      color: var(--sub-text);
      white-space: nowrap;
    }
  }
`;
