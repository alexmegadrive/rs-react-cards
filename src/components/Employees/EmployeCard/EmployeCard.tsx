import React from "react";
import { IEmployeCard } from "../EmployeesList/EmployeesList";
import styles from "../Employees.module.scss";

export interface IEmployeeCardProps {
  employe: IEmployeCard;
}

export default class EmployeCard extends React.Component<IEmployeeCardProps> {
  render() {
    const {
      firstName,
      lastName,
      accessCategories,
      birthDate,
      email,
      group,
      isNotificationsEnabled,
      img,
    } = this.props.employe;

    return (
      <li className={styles.card} data-testid="card">
        <ul className={styles.card__details}>
          <li className={styles.card__row}>
            <span className={styles.label}>Name: </span>
            {firstName}
          </li>

          <li className={styles.card__row}>
            <span className={styles.label}>Last name: </span>
            {lastName}
          </li>
          <li className={styles.card__row}>
            <span className={styles.label}>Email: </span>
            {email}
          </li>
          <li className={styles.card__row}>
            <span className={styles.label}>Birth date: </span>
            {birthDate}
          </li>
          <li className={styles.card__row}>
            <span className={styles.label}>Role: </span>
            {group}
          </li>
          <li className={styles.card__row}>
            <span className={styles.label}>Access categories: </span>
            {accessCategories.map((group, index) => (
              <span className={styles.category} key={index}>
                {group}
              </span>
            ))}
          </li>
          <li className={styles.card__row}>
            <span className={styles.label}>Notifications: </span>
            {isNotificationsEnabled ? "yes" : "no"}
          </li>
        </ul>
        <img className={styles.card__photo} src={img}></img>
      </li>
    );
  }
}
