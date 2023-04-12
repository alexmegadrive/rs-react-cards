import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormDataState {
  formData: string;
}

const initialState: FormDataState = {
  formData: "",
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<string>) => {
      state.formData = action.payload;
    },
  },
});
export const { setFormData } = formDataSlice.actions;
export const { actions: formDataActions } = formDataSlice;

export default formDataSlice.reducer;
