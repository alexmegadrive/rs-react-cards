import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFormData } from "../../components/Employees/NewEmployeForm/NewEmployeForm";

const initialState: IFormData = {
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
};

export const formDataSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<IFormData>) => {
      const formValues = JSON.stringify(action.payload);
      let src = "";
      if (action.payload.file.length > 0) {
        src = URL.createObjectURL(action.payload.file[0]);
      }
      return {
        ...JSON.parse(formValues),
        img: src ? src : state.img,
      };
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.img = action.payload;
    },
    resetFormData: () => {
      return initialState;
    },
  },
});
export const { setFormData } = formDataSlice.actions;
export const { actions: formDataActions } = formDataSlice;

export default formDataSlice.reducer;
