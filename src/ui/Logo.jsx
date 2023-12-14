import styled from "styled-components";

const StyledLogo = styled.img`
  margin-left: 4rem;
  height: 4.6rem;
  display: block;
`;

export default function Logo() {
  return (
    <>
      <StyledLogo src="/vite.svg" alt="Logo" />
    </>
  );
}
