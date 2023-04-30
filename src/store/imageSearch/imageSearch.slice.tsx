import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ImageSearchState {
  query: string;
}

const initialState: ImageSearchState = {
  query: "",
};

export const imageSearchSlice = createSlice({
  name: "searchQuery",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});
export const { setSearchQuery } = imageSearchSlice.actions;
export const { actions: imageSearchActions } = imageSearchSlice;

export default imageSearchSlice.reducer;
