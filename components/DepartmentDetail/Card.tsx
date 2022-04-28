import styled from "@emotion/styled";
import { ReactElement } from "react";
import { Department } from "./../../interface/index";

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
  contents: Department;
  arr: number[];
}

export default function DepartmentCard({ index, contents, arr }: Props) {
  const myIndex = arr.indexOf(index);
  return (
    <Wrapper
      style={{
        transform: `translateX(-${(myIndex + 1) * 130}px)`,
        marginTop: `${myIndex * 50}px`,
        zIndex: arr.length - myIndex,
      }}
    >
      <img
        src={contents.image}
        style={{
          width: `${700 - myIndex * 90}px`,
          height: `${500 - myIndex * 70}px`,
          opacity: `${1 - 0.2 * myIndex}`,
        }}
      />
      <Information style={myIndex === 0 ? { opacity: 1 } : { opacity: 0 }}>
        <h1>{contents.name}</h1>
        <p>{contents.description}</p>
        <SubInfor>
          <SubInforBox
            title="취업률"
            content={`${contents.percent.toFixed(2)}%`}
          />
          <hr />
          <SubInforBox
            title="통계"
            content={`${contents.found_job_student_count}/${contents.student_count}명`}
          />
          <hr />
          <SubInforBox
            title="담임"
            content={
              contents.teacher_name.substring(0, 1) +
              "O" +
              contents.teacher_name.substring(2, 3)
            }
          />
        </SubInfor>
      </Information>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-left: 300px;
  justify-content: center;
  width: 100%;
  position: absolute;
  transition: 1s;
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
    max-width: 500px;
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
