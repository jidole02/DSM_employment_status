import styled from "@emotion/styled";
import Menu from "./Menu";

interface Props {
  menuIndex: number;
}

export default function Header({ menuIndex }: Props) {
  return (
    <Wrapper>
      <Menu menuIndex={menuIndex} />
      <div className="fullEmployment">
        <h3>취업률 : 83%</h3>
        <span>2020년 7월 17일 기준</span>
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
