import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  templates: [],
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    getTemplates: (state, action) => {
      state.templates = action.payload;
    },
  },
});

export const { getTemplates } = templateSlice.actions;
export default templateSlice.reducer;
