import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  max-width: 120rem;
  min-height: 117rem;
  margin: 4vw auto;
  background-color: #fff;
  border-radius: 9px;
  overflow: hidden;
  box-shadow: 0 2rem 6rem 0.5rem rgba($color-grey-dark-1, 0.2);

  display: grid;
  grid-template-rows: 10rem minmax(100rem, auto);
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "head head"
    "list recipe";

  @media only screen and (max-width: $bp-large) {
    max-width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Outlet />
    </StyledAppLayout>
  );
}
