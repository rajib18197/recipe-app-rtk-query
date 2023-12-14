import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    
    to{
        transform: rotate(360deg);
    }
`;
const Spinner = styled.div`
  margin: 5rem auto;
  text-align: center;

  background: radial-gradient(farthest-side, var(--color-primary) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-primary));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);

  height: 6rem;
  width: 6rem;
  /* fill: var(--color-primary); */
  border-radius: 50%;
  animation: ${rotate} 2s infinite linear;
`;

export default Spinner;
