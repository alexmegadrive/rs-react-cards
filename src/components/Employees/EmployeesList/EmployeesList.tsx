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
  accessCategories: (string | undefined)[];
  img?: string;
}
export interface IEmployeesListProps {
  employees: IEmployeCard[] | never;
}

const EmployeesList: React.FC<IEmployeesListProps> = ({ employees }) => {
  return (
    <>
      <h2>Employees list</h2>

      {employees && employees.length ? (
        <div>
          Employees found: {employees.length}
          <ul className={styles.list}>
            {employees.map((employe, index) => (
              <EmployeCard key={index} employe={employe} />
            ))}
          </ul>
        </div>
      ) : (
        <div>No employees found</div>
      )}
    </>
  );
};

export default EmployeesList;
