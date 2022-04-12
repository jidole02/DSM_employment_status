import styled from "@emotion/styled";

export default function Infor() {
  return (
    <Wrapper>
      <span>Made By 정지원</span>
      <span>Server By 정지우</span>
      <span>github.com/jidole02</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 45px;
  & span {
    font-size: 14px;
    color: var(--sub-text);
  }
`;
