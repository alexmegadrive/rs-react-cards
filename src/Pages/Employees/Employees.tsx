import React from "react";
import Header from "../../components/Header/Header";
import EmployeesList from "../../components/Employees/EmployeesList/EmployeesList";
import AddEmployeForm from "../../components/Employees/AddEmploye/AddEmploye";
import { RootState, useAppSelector } from "../../store/store";

const Employees: React.FC = () => {
  const employeesState = useAppSelector((state: RootState) => state.employees);

  return (
    <>
      <Header />
      <main className="main">
        <AddEmployeForm />
        <EmployeesList employees={employeesState} />
      </main>
    </>
  );
};
export default Employees;
