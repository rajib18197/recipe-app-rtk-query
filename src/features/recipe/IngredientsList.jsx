import styled from "styled-components";
import Ingredient from "./Ingredient";
import Heading from "../../ui/Heading";

const IngredientsContainer = styled.div`
  padding: 5rem 8rem;
  font-size: 1.6rem;
  line-height: 1.4;
  background-color: $color-grey-light-2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIngredientsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem 3rem;
  list-style: none;
`;

export default function IngredientsList({ ingredients }) {
  return (
    <IngredientsContainer>
      <Heading as="h2">Recipe ingredients</Heading>
      <StyledIngredientsList>
        {ingredients.map((ing, i) => (
          <Ingredient key={i} ing={ing} />
        ))}
      </StyledIngredientsList>
    </IngredientsContainer>
  );
}
