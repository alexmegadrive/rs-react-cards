import React from "react";
import { IEmployeCard } from "../EmployeesList/EmployeesList";
import styles from "../Employees.module.scss";
// import "./card.scss";

export interface IEmployeeCardProps {
  employe: IEmployeCard;
}

export default class EmployeCard extends React.Component<IEmployeeCardProps> {
  render() {
    return (
      <li className={styles.card}>
        <ul className={styles.card__details}>
          <li className={styles.card__row}>
            <span className={styles.label}>Name: </span>
            {this.props.employe.firstName}
          </li>

          <li className={styles.card__row}>
            <span className={styles.label}>Last name: </span>
            {this.props.employe.lastName}
          </li>
          <li className={styles.card__row}>
            <span className={styles.label}>Email: </span>
            {this.props.employe.email}
          </li>
          <li className={styles.card__row}>
            <span className={styles.label}>Birth date: </span>
            {this.props.employe.birthDate}
          </li>
          <li className={styles.card__row}>
            <span className={styles.label}>Role: </span>
            {this.props.employe.group}
          </li>
          <li className={styles.card__row}>
            <span className={styles.label}>Access categories: </span>
            {this.props.employe.accessCategories.map((group, index) => (
              <span className={styles.category} key={index}>
                {group}
              </span>
            ))}
          </li>
          <li className={styles.card__row}>
            <span className={styles.label}>Notifications: </span>
            {this.props.employe.isNotificationsEnabled ? "yes" : "no"}
          </li>
        </ul>
      </li>
    );
  }
}
