import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hasFetchRecipes: false,
  search: {
    currentQuery: "",
    queries: [],
    recipes: [],
  },
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    triggerFetchRecipes(state, action) {
      state.hasFetchRecipes = true;
      // state.search.queries = [action.payload, ...state.search.queries];
      // state.search.currentQuery = action.payload;
    },

    updateSearchResults(state, action) {
      state.search.currentQuery = action.payload.currentQuery;
      state.search.recipes = action.payload.recipes;
    },

    finishedFetchRecipes(state, action) {
      state.hasFetchRecipes = false;
    },
  },
});

export const {
  triggerFetchRecipes,
  finishedFetchRecipes,
  updateSearchResults,
} = recipeSlice.actions;
const recipeReducer = recipeSlice.reducer;
export default recipeReducer;

export const selectHasFetchRecipe = (state) => state.recipe.hasFetchRecipes;
export const selectSearch = (state) => state.recipe.search;
