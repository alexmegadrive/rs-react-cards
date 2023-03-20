import React from "react";
import Header from "../../components/Header/Header";
import EmployeesList from "../../components/Employees/EmployeesList/EmployeesList";
import EmployeForm from "../../components/Employees/EmployeForm/EmployeForm";

export default class Employees extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <EmployeForm />
          <EmployeesList />
        </main>
      </>
    );
  }
}
