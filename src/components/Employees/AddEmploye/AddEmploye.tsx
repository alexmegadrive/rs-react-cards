import React from "react";
import NewEmployeForm from "../NewEmployeForm/NewEmployeForm";
import { IEmployeCard } from "../EmployeesList/EmployeesList";

interface IAddEmployeProps {
  addNewEmploye: (e: IEmployeCard) => void;
}

export default class AddEmploye extends React.Component<IAddEmployeProps> {
  state = {
    isFormShown: false,
  };

  render() {
    return (
      <>
        {this.state.isFormShown ? (
          <NewEmployeForm addNewEmploye={this.props.addNewEmploye} />
        ) : (
          <button onClick={() => this.setState({ isFormShown: true })}>
            New employe
          </button>
        )}
      </>
    );
  }
}
