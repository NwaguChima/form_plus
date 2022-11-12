import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Template"],
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public",
  }),
  endpoints: (builder) => ({}),
});
