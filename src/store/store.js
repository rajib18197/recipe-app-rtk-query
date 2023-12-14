import { configureStore } from "@reduxjs/toolkit";
import api from "./api/apiSlice";
import recipeReducer from "../features/recipe/recipeSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    recipe: recipeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
