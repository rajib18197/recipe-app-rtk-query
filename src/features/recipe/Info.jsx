import styled from "styled-components";

const StyledInfo = styled.div`
  font-size: 1.65rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 4.5rem;
  }

  & svg {
    height: 2.35rem;
    width: 2.35rem;
    fill: var(--color-primary);
    margin-right: 1.15rem;
  }
`;

const Span = styled.span`
  margin-right: 0.5rem;
  font-weight: 700;
`;

export default function Info({ icon, children, number, text }) {
  return (
    <StyledInfo>
      {icon}
      <Span>{number}</Span>
      <span>{text}</span>
      {children}
    </StyledInfo>
  );
}
