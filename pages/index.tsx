import styled from "@emotion/styled";
import DepartmentDetail from "../components/DepartmentDetail";
import Header from "../components/Header";

export default function ShowEmployment() {
  return (
    <Wrapper>
      <Header />
      <DepartmentDetail />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 30px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 50px;
`;
