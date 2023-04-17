import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import employeesDB from "../../data/employees";
import { IEmployeCard } from "../../components/Employees/EmployeesList/EmployeesList";

const initialState: IEmployeCard[] = [...employeesDB];

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addNewEmploye: (state, action: PayloadAction<IEmployeCard>) => {
      return [action.payload, ...state];
    },
  },
});
export const { addNewEmploye } = employeesSlice.actions;
export const { actions: employeesActions } = employeesSlice;

export default employeesSlice.reducer;
