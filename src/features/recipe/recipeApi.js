import api from "../../store/api/apiSlice";
import { finishedFetchRecipes } from "./recipeSlice";

const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: (searchName) => `/recipes?search=${searchName}`,

      transformResponse(response) {
        response.data.recipes = response.data.recipes.map((rec) => ({
          id: rec.id,
          title: rec.title,
          image: rec.image_url,
          publisher: rec.publisher,
        }));

        return response;
      },
    }),

    getRecipeDetails: builder.query({
      query: (id) => `/recipes/${id}`,

      transformResponse: (response) => {
        const { recipe } = response.data;
        response.data.recipe = {
          id: recipe.id,
          title: recipe.title,
          cookingTime: recipe.cooking_time,
          publisher: recipe.publisher,
          image: recipe.image_url,
          sourceUrl: recipe.source_url,
          servings: recipe.servings,
          ingredients: recipe.ingredients,
        };

        return response;
      },
    }),
  }),
});

export const { useGetRecipesQuery, useGetRecipeDetailsQuery } = recipeApi;

export const isRecipesLoading = (state) =>
  Object.values(state.api.queries).some(
    (entry) => entry.endpointName === "getRecipes" && entry.status === "pending"
  );

export const getRecipesResults = (state) =>
  Object.values(state.api.queries).find(
    (entry) =>
      entry.endpointName === "getRecipes" && entry.status === "fulfilled"
  );
