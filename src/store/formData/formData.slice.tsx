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
      // console.log("formValues :", formValues);
      // console.log("src :", src);

      //creating a deepCopy to preventing errors
      return {
        ...JSON.parse(formValues),
        img: src ? src : state.img,
      };
      // state.formData = { ...JSON.parse(formValues), img: state.formData.img };
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.img = action.payload;
    },
    resetFormData: (state) => {
      return initialState;
    },
  },
});
export const { setFormData } = formDataSlice.actions;
export const { actions: formDataActions } = formDataSlice;

export default formDataSlice.reducer;
