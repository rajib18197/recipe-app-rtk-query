import styled from "styled-components";
import Preview from "./Preview";
import { getRecipesResults, isRecipesLoading } from "./recipeApi";
import { useSelector } from "react-redux";
import Spinner from "../../ui/Spinner";
import { selectHasFetchRecipe, selectSearch } from "./recipeSlice";

const StyledResults = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

export default function Results() {
  const isLoading = useSelector(isRecipesLoading);
  const { recipes } = useSelector(selectSearch);

  if (isLoading) return <Spinner />;

  console.log(recipes);

  return (
    <StyledResults>
      {recipes?.map((recipe) => (
        <Preview recipe={recipe} key={recipe.id} />
      ))}
    </StyledResults>
  );
}

// const results = useGetRecipesQuery(searchQuery, {
//   skip: !hasFetchRecipe && searchQuery === "",

//   // First time when component first mount then [hasFetchRecipe] state is false and query was not execute. when [hasFetchRecipe] is going to true then query has executed and if we dispatch the [finishedFetchRecipe] action inside [onQueryStarted] function after fulfilled promise then [hasFetchRecipe] will be false again and this query will be [uninitialized status] and as a result we get undefined.
//   // so to avoid this we have to keep the [skip] property always false
//   // skip: !hasFetchRecipe,
// });

// const hasFetchRecipe = useSelector(selectHasFetchRecipe);
// const { previousQueries, currentQuery } = useSelector(selectSearch);
// console.log(hasFetchRecipe, currentQuery);

// const results = useGetRecipesQuery(currentQuery, {
//   skip: !hasFetchRecipe && currentQuery === "",
// });

// console.log(results);

// const data = useSelector((state) => api.endpoints.getRecipes.select()(state));
// console.log(data);

// const {
//   data: { data: { recipes } = {} } = {},
//   isLoading,
//   isFetching,
// } = results || {};

// if (isLoading || isFetching) return <Spinner />;
// console.log(recipes);
