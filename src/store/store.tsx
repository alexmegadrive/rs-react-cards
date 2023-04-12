import { configureStore } from "@reduxjs/toolkit";
import imageSearchReducer from "./imageSearch/imageSearch.slice";
export const store = configureStore({
  reducer: {
    searchQuery: imageSearchReducer,
  },
});
