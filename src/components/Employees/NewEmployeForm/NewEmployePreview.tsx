import React from "react";
import { IEmployeCard } from "../EmployeesList/EmployeesList";
import styles from "../Employees.module.scss";

interface INewEmployePreviewProps {
  employe: IEmployeCard;
  addNewEmploye: (e: IEmployeCard) => void;
  hidePreview: () => void;
}

export default class NewEmployePreview extends React.Component<INewEmployePreviewProps> {
  handleConfirmNewEmploye = (employe: IEmployeCard) => {
    if (employe) {
      this.props.addNewEmploye(employe);
      this.props.hidePreview();
    }
  };
  render() {
    if (this.props.employe) {
    }
    const {
      firstName,
      lastName,
      email,
      img,
      birthDate,
      group,
      accessCategories,
      isNotificationsEnabled,
    } = this.props.employe;
    return (
      <>
        <div className={styles.form}>
          <h3>Preview new employe</h3>
          <label className={styles.label} htmlFor="firstName">
            First name:
          </label>
          <div>{firstName}</div>

          <label className={styles.label} htmlFor="lastName">
            Last name:
          </label>
          <div>{lastName}</div>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <div>{email}</div>
          <label className={styles.label} htmlFor="b-date">
            Date of birth:
          </label>
          <div>{birthDate}</div>

          <label className={styles.label} htmlFor="role">
            Role:
          </label>
          <div>{group}</div>
          <label className={styles.label} htmlFor="notifications">
            Notifications:
          </label>
          <div>{isNotificationsEnabled ? "yes" : "no"}</div>

          {accessCategories && accessCategories.length > 0 ? (
            <>
              <label className={styles.label} htmlFor="Access categories">
                Access categories
              </label>
              <div>{accessCategories.join(", ")}</div>
            </>
          ) : (
            ""
          )}

          <img className={styles.card__photo} src={img} alt="avatar" />
          <button
            onClick={() => this.handleConfirmNewEmploye(this.props.employe)}
          >
            Confirm
          </button>
        </div>
      </>
    );
  }
}
