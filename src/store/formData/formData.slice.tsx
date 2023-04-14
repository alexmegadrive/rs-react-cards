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
    img: "",
    email: "",
    group: "",
    category: {
      appliance: false,
      computers: false,
      laptops: false,
      smartphones: false,
      tv: false,
    },
    notifications: "disabled",
  },
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IFormData>) => {
      console.log("state :", state.formData);
      console.log("state img :", state.formData.img);
      console.log("action.payload :", action.payload);
      const formValues = JSON.stringify(action.payload);

      // const src = URL.createObjectURL(action.payload.file[0]);
      //creating a deepCopy to preventing errors
      state.formData = { ...JSON.parse(formValues), img: state.formData.img };
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.formData.img = action.payload;
    },
    resetFormData: (state) => {
      state.formData = initialState.formData;
    },
  },
});
export const { setFormData } = formDataSlice.actions;
export const { actions: formDataActions } = formDataSlice;

export default formDataSlice.reducer;
