import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useRef, useState } from "react";
import { isRecipesLoading } from "../features/recipe/recipeApi";
import { useDispatch, useSelector } from "react-redux";
import {
  triggerFetchRecipes,
  updateSearchResults,
} from "../features/recipe/recipeSlice";
import api from "../store/api/apiSlice";

const Form = styled.form`
  background-color: #fff;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
  transition: all 0.3s;

  &:focus-within {
    transform: translateY(-2px);
    box-shadow: 0 0.7rem 3rem rgba(var(--color-grey-dark-1), 0.08);
  }

  & button {
    font-weight: 600;
    font-family: inherit;
  }
`;

const Input = styled.input`
  border: none;
  background: none;
  font-family: inherit;
  color: inherit;
  font-size: 1.7rem;
  width: 30rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-grey-light-3);
  }

  @media only screen and (max-width: var(--bp-medium)) {
    width: auto;

    &::placeholder {
      color: white;
    }
  }
`;

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const isLoading = useSelector(isRecipesLoading);

  console.log(isLoading);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // we can dispatch an action called [setCurrentQuery] and pass the query as a payload. But if we do that then await will pause here and as state is updated that's why in the Results.jsx component called [getRecipesResults with the current query] but there is no result has arrived in the apiSlice because data is being fetched. so we got some unexpected behaviour in the UI.
      // Solutions: (2)
      // 1) One way to solve it is to dispatch an action called [setCurrentQuery] and pass the query as a payload after that getRecipes initiate has successfully resolved then as a state change Results.jsx component called [getRecipesResults with the current query] and this time as data is available in the apiSlice and we achieved our desired outcome.
      // 2) Or second way we can is to when results has been available then we set the results and query in the state via dispatch and Results.jsx component directly get that data from there. But the flaw is that we store same data in two different places in the store.

      // as dispatch is synchronous here it doesn't trigger immediate reflect on the UI. after this function call has finished or if there is some await statement here then those component has subscribed to this state got re-render again.
      // dispatch(triggerFetchRecipes());
      // console.log(111);

      const results = await dispatch(
        api.endpoints.getRecipes.initiate(query)
      ).unwrap();

      console.log(results);

      dispatch(
        updateSearchResults({
          recipes: results.data.recipes,
          currentQuery: query,
        })
      );

      setQuery("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search over 1,000,000 recipes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ButtonIcon addextrastyles={"true"} icon={<HiMagnifyingGlass />}>
        {isLoading ? "Seacrhing" : "Search"}
      </ButtonIcon>
    </Form>
  );
}

// (state) => api.endpoints.getRecipes.select()(state).isLoading

// const hasFetchRecipe = useSelector(selectHasFetchRecipe);
// const { queries, currentQuery } = useSelector(selectSearch);

// const currentQueryCount = queries.reduce(
//   (acc, cur) => (cur === currentQuery ? acc + 1 : acc),
//   0
// );

// task
// const styles = {
//   "font-weight": 600,
//   "font-family": inherit,
// };

// dispatch(triggerFetchRecipes(query));
