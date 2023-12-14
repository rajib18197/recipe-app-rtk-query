import { useParams } from "react-router-dom";
import ImageView from "../../ui/ImageView";
import Details from "./Details";
import Direction from "./Direction";
import IngredientsList from "./IngredientsList";
import { useGetRecipeDetailsQuery } from "./recipeApi";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";

const StyledGuideBook = styled.div`
  background-color: $color-grey-light-1;
`;

export default function GuideBook() {
  const { id } = useParams();
  const { data, isFetching, error, isError } = useGetRecipeDetailsQuery(id);

  if (isFetching) return <Spinner />;

  if (!isFetching && isError)
    return <h2>{error || `error while loading this recipe details ${id}`}</h2>;

  const { recipe } = data.data;
  const {
    image,
    title,
    ingredients,
    soureceUrl,
    servings,
    cookingTime,
    publisher,
  } = recipe;
  return (
    <StyledGuideBook>
      <ImageView src={image} title={title} />

      <Details servings={servings} cookingTime={cookingTime} />

      <IngredientsList ingredients={ingredients} />

      <Direction sourceUrl={soureceUrl} publisher={publisher} />
    </StyledGuideBook>
  );
}
