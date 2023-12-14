import { HiCheckCircle } from "react-icons/hi2";
import styled from "styled-components";

const StyledIngredient = styled.li`
  display: flex;

  & svg {
    height: 2rem;
    width: 2rem;
    fill: var(--color-primary);
    margin-right: 1.1rem;
    flex: 0 0 auto;
    margin-top: 0.1rem;
  }
`;

const Quantity = styled.div`
  margin-right: 0.5rem;
  flex: 0 0 auto;
`;

export default function Ingredient({ ing }) {
  return (
    <StyledIngredient>
      <HiCheckCircle />
      <Quantity>{ing.quantity}</Quantity>
      <div>
        <span>{ing.unit}</span>
        {ing.description}
      </div>
    </StyledIngredient>
  );
}
