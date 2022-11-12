import { configureStore } from "@reduxjs/toolkit";
import templateSlice from "../features/template/templateSlice";

export const store = configureStore({
  reducer: {
    template: templateSlice,
  },
});
