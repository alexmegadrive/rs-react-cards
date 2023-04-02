import React, { useState } from "react";
import Header from "../../components/Header/Header";
import EmployeesList from "../../components/Employees/EmployeesList/EmployeesList";
import AddEmployeForm from "../../components/Employees/AddEmploye/AddEmploye";
import employeesDB from "../../data/employees";
import { IEmployeCard } from "../../components/Employees/EmployeesList/EmployeesList";

const Employees = () => {
  const [employees, setEmployees] = useState(employeesDB);

  const addNewEmploye = (newEmploye: IEmployeCard) => {
    setEmployees([newEmploye, ...employees]);
  };

  return (
    <>
      <Header />
      <main className="main">
        <AddEmployeForm addNewEmploye={addNewEmploye} />
        <EmployeesList employees={employees} />
      </main>
    </>
  );
};
export default Employees;
