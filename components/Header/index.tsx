import styled from "@emotion/styled";
import Menu from "./Menu";
import { Employment } from "./../../interface/index";

interface Props {
  menuIndex: number;
  employment: Employment;
}

export default function Header({ menuIndex, employment }: Props) {
  const today = new Date();
  return (
    <Wrapper>
      <Menu menuIndex={menuIndex} />
      <div className="fullEmployment">
        <h3>취업률 : {employment.percent.toFixed(2)}%</h3>
        <span>{today.toLocaleDateString()} 기준</span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & .fullEmployment {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
    & h3 {
      font-size: 23px;
    }
    & span {
      font-size: 15px;
      color: var(--sub-text);
    }
  }
`;
