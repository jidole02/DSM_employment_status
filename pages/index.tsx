import styled from "@emotion/styled";
import DepartmentDetail from "../components/DepartmentDetail";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { GetServerSidePropsResult } from "next";
import { Company, Department, Employment } from "./../interface/index";

interface MainProps {
  departments: Department[];
  companys: Company[];
  employment: Employment;
}

export default function ShowEmployment(props: MainProps) {
  const [menuIndex, setMenuIndex] = useState(0);
  return (
    <Wrapper>
      <Header menuIndex={menuIndex} employment={props.employment} />
      <DepartmentDetail
        setMenuIndex={setMenuIndex}
        departments={props.departments}
      />
      <Footer companys={props.companys} />
    </Wrapper>
  );
}

export async function getStaticProps(): Promise<
  GetServerSidePropsResult<MainProps>
> {
  const departmentsRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}student/department`
  );
  const companysRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}enterprise/leading`
  );
  const employmentRes = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}student/employment`
  );
  return {
    props: {
      departments: departmentsRes.data,
      companys: companysRes.data,
      employment: employmentRes.data,
    },
  };
}

const Wrapper = styled.div`
  padding-top: 30px;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 50px;
`;
