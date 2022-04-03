import styled from "@emotion/styled";
import DepartmentDetail from "../components/DepartmentDetail";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { GetStaticPropsResult } from "next";
import { Company, Department } from "./../interface/index";

interface MainProps {
  departments: Department[];
  companys: Company[];
}

export default function ShowEmployment(props: MainProps) {
  console.log(props.departments);
  const [menuIndex, setMenuIndex] = useState(0);
  return (
    <Wrapper>
      <Header menuIndex={menuIndex} />
      <DepartmentDetail
        setMenuIndex={setMenuIndex}
        departments={props.departments}
      />
      <Footer companys={props.companys} />
    </Wrapper>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<MainProps>
> {
  const departmentsRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}student/department`
  );
  const companysRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}enterprise/leading`
  );
  return {
    props: {
      departments: departmentsRes.data,
      companys: companysRes.data,
    },
  };
}

const Wrapper = styled.div`
  padding-top: 30px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 50px;
`;
