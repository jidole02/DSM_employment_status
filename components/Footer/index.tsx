import styled from "@emotion/styled";
import { Company } from "../../interface";
import Infor from "./Infor";
import Slide from "./Slide";

interface Props {
  companys: Company[];
}

export default function Footer({ companys }: Props) {
  return (
    <Wrapper>
      <Slide companys={companys} />
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
