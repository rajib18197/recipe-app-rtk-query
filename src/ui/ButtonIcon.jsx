import styled, { css } from "styled-components";

const Button = styled.button`
  background-image: var(--gradient);
  border-radius: 10rem;
  border: none;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  padding: 1.5rem 4rem;
  font-size: 1.5rem;
  font-weight: 600;

  ${(props) =>
    props.addextrastyles === "true" &&
    css`
      font-weight: 600;
      font-family: inherit;
    `}

  svg {
    height: 2.25rem;
    width: 2.25rem;
    fill: currentColor;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

export default function ButtonIcon({ icon, addextrastyles, children }) {
  return (
    <Button addextrastyles={addextrastyles}>
      {icon}
      <span>{children}</span>
    </Button>
  );
}

const StyledButtonIconCircle = styled.button`
  height: 2rem;
  width: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  display: block;

  & svg {
    height: 100%;
    width: 100%;
    fill: var(--color-primary);
    transition: all 0.3s;
  }

  &:focus {
    outline: none;
  }

  &:hover svg {
    fill: var(--color-grad-2);
    transform: translateY(-1px);
  }

  &:active svg {
    fill: var(--color-grad-2);
    transform: translateY(0);
  }

  &:not(:last-child) {
    margin-right: 0.3rem;
  }
`;

export function ButtonIconCircle({ icon, children }) {
  return <StyledButtonIconCircle>{icon}</StyledButtonIconCircle>;
}

const StyledButtonIconRound = styled.button`
  background-image: var(--gradient);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 4.5rem;
  width: 4.5rem;
  // margin-left: auto;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.07);
  }

  &:focus {
    outline: none;
  }

  svg {
    height: 2.5rem;
    width: 2.5rem;
    fill: #fff;
  }
`;

export function ButtonIconRound({ icon, children }) {
  return <StyledButtonIconRound>{icon}</StyledButtonIconRound>;
}

const StyledIconBox = styled.div`
  background-color: darken($color-grey-light-2, 2%);

  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  border-radius: 10rem;

  margin-left: auto;
  margin-right: 1.75rem;

  svg {
    height: 2.25rem;
    width: 2.25rem;
    fill: $color-primary;
  }
`;

export function IconBox({ icon }) {
  return <StyledIconBox>{icon}</StyledIconBox>;
}
