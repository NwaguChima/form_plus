import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { v4 as uuid } from "uuid";

const templateAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.created.localeCompare(b.created),
});

const initialState = templateAdapter.getInitialState();

export const extendedTemplateSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTemplates: builder.query({
      query: () => "/task_templates",
      transformResponse: (response) => {
        const templatesWithIds = response.map((template) => ({
          ...template,
          id: uuid(),
        }));

        return templateAdapter.setAll(initialState, templatesWithIds);
      },

      providesTags: (result, error, arg) => [
        { type: "Template", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Template", id })),
      ],
    }),
  }),
});

export const { useGetTemplatesQuery } = extendedTemplateSlice;

// returns the query result object
export const selectTemplatesResult =
  extendedTemplateSlice.endpoints.getTemplates.select();

// creates memoized selector
export const selectTemplatesData = createSelector(
  selectTemplatesResult,
  (templatesResult) => templatesResult.data // normalized state object with entities and ids
);

export const {
  selectAll: selectAllTemplates,
  selectById: selectTemplateById,
  selectIds: selectTemplateIds,
} = templateAdapter.getSelectors(
  (state) => selectTemplatesData(state) ?? initialState
);
