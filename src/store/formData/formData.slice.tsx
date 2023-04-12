import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormDataState {
  query: string;
}

const initialState: FormDataState = {
  query: "",
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});
export const { setFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
