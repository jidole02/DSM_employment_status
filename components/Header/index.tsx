import styled from "@emotion/styled";
import Menu from "./Menu";

interface Props {
  menuIndex: number;
}

export default function Header({ menuIndex }: Props) {
  return (
    <Wrapper>
      <Menu menuIndex={menuIndex} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
