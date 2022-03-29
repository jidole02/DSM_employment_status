import styled from "@emotion/styled";
import Infor from "./Infor";
import Slide from "./Slide";

export default function Footer() {
  return (
    <Wrapper>
      <Slide />
      <Infor />
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 50px;
`;
