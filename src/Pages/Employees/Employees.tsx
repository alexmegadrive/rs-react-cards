import React from "react";
import Header from "../../components/Header/Header";
import EmployeesList from "../../components/Employees/EmployeesList/EmployeesList";
import AddEmployeForm from "../../components/Employees/AddEmploye/AddEmploye";
import { employees } from "../../data/employees";
import { IEmployeCard } from "../../components/Employees/EmployeesList/EmployeesList";

export default class Employees extends React.Component {
  state = {
    employees: employees,
  };

  addNewEmploye(newEmploye: IEmployeCard) {
    this.setState({
      ...this.state,
      employees: [newEmploye, ...this.state.employees],
    });
  }
  handleAddEmploye = this.addNewEmploye.bind(this);

  render() {
    return (
      <>
        <Header />
        <main className="main">
          <AddEmployeForm addNewEmploye={this.handleAddEmploye} />
          <EmployeesList employees={this.state.employees} />
        </main>
      </>
    );
  }
}
