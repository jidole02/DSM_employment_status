import styled from "@emotion/styled";
import Menu from "./Menu";

export default function Header() {
  return (
    <Wrapper>
      <Menu />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
