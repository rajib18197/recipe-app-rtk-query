import styled from "styled-components";

const StyledNavItem = styled.li`
  position: relative;
`;

const NavButton = styled.button`
  height: 100%;
  font-family: inherit;
  color: inherit;
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 1.5rem;
  transition: all 0.3s;

  display: flex;
  align-items: center;

  svg {
    height: 2.4rem;
    width: 2.4rem;
    fill: var(--color-primary);
    margin-right: 0.7rem;
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: var(--color-grey-light-2);
  }
`;

export default function NavItem({ nav, children }) {
  return (
    <StyledNavItem>
      <NavButton>
        <svg className="nav__icon">
          <use href={`src/img/icons.svg#${nav.icon}`}></use>
        </svg>
        <span>{nav.label}</span>
      </NavButton>

      {children}
    </StyledNavItem>
  );
}
