import React from "react";
import Header from "../../components/Header/Header";
import EmployeesList from "../../components/Employees/EmployeesList/EmployeesList";
import AddEmployeForm from "../../components/Employees/AddEmploye/AddEmploye";
import { employees } from "../../data/employees";

export default class Employees extends React.Component {
  render() {
    // console.log("employees from Empl page :", employees);
    return (
      <>
        <Header />
        <main className="main">
          <AddEmployeForm />
          <EmployeesList employees={employees} />
        </main>
      </>
    );
  }
}
