import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-primary);
      text-transform: uppercase;
      margin-bottom: 2.5rem;
      text-align: center;
    `}
`;

export default Heading;
