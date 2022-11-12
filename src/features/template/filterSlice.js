import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
  order: "Default",
  date: "Default",
  search: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryFilter(state, action) {
      state.category = action.payload;
    },

    setOrderFilter(state, action) {
      state.order = action.payload;
    },

    setDateFilter(state, action) {
      state.date = action.payload;
    },

    setSearchFilter(state, action) {
      state.search = action.payload;
    },
  },
});

export const {
  setCategoryFilter,
  setOrderFilter,
  setDateFilter,
  setSearchFilter,
} = filterSlice.actions;

// selectors for each filter
export const selectCategory = (state) => state.filters.category;
export const selectOrder = (state) => state.filters.order;
export const selectDate = (state) => state.filters.date;
export const selectSearch = (state) => state.filters.search;

export default filterSlice.reducer;
