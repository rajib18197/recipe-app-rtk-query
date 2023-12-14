import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const StyledHeader = styled.header`
  grid-area: head;
  background-color: var(--color-grey-light-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <SearchForm />
      <Navbar />
    </StyledHeader>
  );
}
