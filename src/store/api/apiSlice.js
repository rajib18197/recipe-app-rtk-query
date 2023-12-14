import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://forkify-api.herokuapp.com/api/v2",
  }),
  endpoints: () => ({}),
});

export default api;
