import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFormData } from "../../components/Employees/NewEmployeForm/NewEmployeForm";

export interface FormDataReducerState {
  formData: IFormData;
}

const initialState: FormDataReducerState = {
  formData: {
    firstName: "",
    lastName: "",
    birthDate: "",
    file: [],
    email: "",
    group: "",
    category: {
      appliance: false,
      computers: false,
      laptops: false,
      smartphones: false,
      tv: false,
    },
  },
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IFormData>) => {
      console.log("action.payload :", action.payload);
      const formValues = JSON.stringify(action.payload);
      //creating a deepCopy to preventing errors
      state.formData = JSON.parse(formValues);
    },
  },
});
export const { setFormData } = formDataSlice.actions;
export const { actions: formDataActions } = formDataSlice;

export default formDataSlice.reducer;
