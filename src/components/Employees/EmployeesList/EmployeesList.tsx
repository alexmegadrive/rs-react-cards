import React from "react";
import EmployeCard from "../EmployeCard/EmployeCard";
import styles from "../Employees.module.scss";

export interface IEmployeCard {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  isNotificationsEnabled: boolean;
  group: string;
  accessCategories: string[];
}
export interface IEmployeesListProps {
  employees: IEmployeCard[] | never;
}

export default class EmployeesList extends React.Component<IEmployeesListProps> {
  render() {
    return (
      <>
        {this.props.employees && this.props.employees.length ? (
          <div>
            Employees found: {this.props.employees.length}
            <ul className={styles.list}>
              {this.props.employees.map((employe, index) => (
                <EmployeCard key={index} employe={employe} />
              ))}
            </ul>
          </div>
        ) : (
          <div>No employees found</div>
        )}
      </>
    );
  }
}
