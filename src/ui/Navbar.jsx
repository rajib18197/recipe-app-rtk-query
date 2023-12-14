import styled from "styled-components";
import BookmarkList from "../features/bookmark/BookmarkList";
import NavItem from "./NavItem";

const Nav = styled.nav`
  align-self: stretch;
  margin-right: 2.5rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
`;

const BookmarksContainer = styled.div`
  padding: 1rem 0;
  position: absolute;
  // right: 0;
  right: -2.5rem;
  z-index: 10;
  width: 40rem;
  background-color: #fff;
  box-shadow: 0 0.8rem 5rem 2rem rgba($color-grey-dark-1, 0.1);

  visibility: hidden;
  opacity: 0;
  transition: all 0.5s 0.2s;

  &__field {
    cursor: pointer;
    padding: 0 4rem;

    display: flex;
    align-items: center;
    height: 100%;
    transition: all 0.3s;

    &:hover {
      background-color: $color-grey-light-2;
    }
  }

  &:hover,
  .nav__btn--bookmarks:hover + & {
    visibility: visible;
    opacity: 1;
  }
`;
const navList = [
  //   { icon: "icon-edit", label: "Add recipe" },
  { icon: "icon-bookmark", label: "Bookmarks" },
];

export default function Navbar() {
  return (
    <Nav>
      <NavList>
        {navList.map((nav) => (
          <NavItem key={nav.label} nav={nav} />
        ))}

        <NavItem nav={{ icon: "icon-edit", label: "Add recipe" }}>
          <BookmarksContainer>
            <BookmarkList />
          </BookmarksContainer>
        </NavItem>
      </NavList>
    </Nav>
  );
}
