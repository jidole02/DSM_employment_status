import styled from "@emotion/styled";
import { ReactElement } from "react";

function SubInforBox({
  title,
  content,
}: {
  title: string;
  content: string;
}): ReactElement {
  return (
    <div>
      <h3>{title}</h3>
      <span>{content}</span>
    </div>
  );
}

interface Props {
  index: number;
  src: string;
}

export default function DepartmentCard({ index, src }: Props) {
  return (
    <Wrapper
      style={{
        transform: `translateX(-${index * 200}px)`,
        zIndex: 100 - index,
        marginTop: `${index * 50}px`,
        opacity: `${1 - 0.2 * index}`,
      }}
    >
      <img
        src={src}
        style={{
          width: `${700 - index * 90}px`,
          height: `${500 - index * 70}px`,
        }}
      />
      <Information style={index === 0 ? { opacity: 1 } : { opacity: 0 }}>
        <h1>정보보안과</h1>
        <p>보안 프로그래밍 및 운영체제를 배우는 개발과</p>
        <SubInfor>
          <SubInforBox title="취업률" content="85.4%" />
          <hr />
          <SubInforBox title="통계" content="14/20명" />
          <hr />
          <SubInforBox title="담임" content="이동욱" />
        </SubInfor>
      </Information>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-left: 200px;
  justify-content: center;
  width: 100%;
  position: absolute;
  * {
    transition: 1s;
  }
  & img {
    width: 700px;
    height: 500px;
    object-fit: cover;
    border-radius: 30px;
    -webkit-transform: perspective(500px) rotateY(20deg);
    transform: perspective(500px) rotateY(20deg);
    box-shadow: 0px 0px 20px rgb(255, 255, 255, 0.2);
    -webkit-box-reflect: below -2vw -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(transparent),
        color-stop(0.45, transparent),
        to(rgba(255, 255, 255, 0.25))
      );
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    font-size: 40px;
  }
  & p {
    margin-top: 20px;
    color: var(--sub-text);
    font-size: 20px;
  }
`;

const SubInfor = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-top: 40px;
  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    & h3 {
      font-size: 18px;
      color: var(--sub-text);
      font-weight: 400;
      margin-bottom: 10px;
    }
    & span {
      font-size: 25px;
      font-weight: bold;
    }
  }
  & hr {
    width: 1px;
    height: 40px;
    background-color: #707070;
    border: none;
  }
`;
