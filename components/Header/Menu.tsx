import styled from "@emotion/styled";
import { ReactElement } from "react";

interface DepartmentProps {
  first_text: string;
  last_text: string;
  isNow?: boolean;
}

function DepartmentComponent({
  first_text,
  last_text,
  isNow = false,
}: DepartmentProps): ReactElement {
  return (
    <Department id={isNow ? "isNow" : ""}>
      {first_text}
      <br />
      {last_text}
    </Department>
  );
}

export default function Menu({ menuIndex }: { menuIndex: number }) {
  return (
    <Wrapper>
      <Logo className="center">
        Job <br /> Its.
      </Logo>
      <DepartmentComponent
        first_text="소프트웨어"
        last_text="개발 1반"
        isNow={menuIndex === 0}
      />
      <DepartmentComponent
        first_text="소프트웨어"
        last_text="개발 2반"
        isNow={menuIndex === 1}
      />
      <DepartmentComponent
        first_text="임베디드"
        last_text="개발과"
        isNow={menuIndex === 2}
      />
      <DepartmentComponent
        first_text="정보"
        last_text="보안과"
        isNow={menuIndex === 3}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 60px;
  & #isNow {
    color: white;
    &::before {
      content: " ";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      bottom: -15px;
      background-color: white;
      position: absolute;
      opacity: 1;
    }
  }
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff0000;
  font-size: 20px;
  line-height: 23px;
  font-weight: 600;
`;

const Department = styled.div`
  color: var(--sub-text);
  font-size: 17px;
  display: flex;
  justify-content: center;
  position: relative;
  transition: 0.5s;
  &::before {
    content: " ";
    opacity: 0;
    transition: 0.5s;
  }
`;
