import React from "react";
import styles from "../Employees.module.scss";
import NewEmployeForm from "../NewEmployeForm/NewEmployeForm";
// import "./card.scss";

export default class AddEmploye extends React.Component {
  state = {
    isFormShown: false,
  };

  render() {
    return (
      <>
        {this.state.isFormShown ? (
          <NewEmployeForm />
        ) : (
          <button onClick={() => this.setState({ isFormShown: true })}>
            New employe
          </button>
        )}
      </>
    );
  }
}
