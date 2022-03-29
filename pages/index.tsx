import styled from "@emotion/styled";
import DepartmentDetail from "../components/DepartmentDetail";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";

export default function ShowEmployment() {
  const [menuIndex, setMenuIndex] = useState(0);
  return (
    <Wrapper>
      <Header menuIndex={menuIndex} />
      <DepartmentDetail setMenuIndex={setMenuIndex} />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 30px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 50px;
`;
