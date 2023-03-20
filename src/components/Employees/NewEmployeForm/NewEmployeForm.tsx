import React from "react";
import styles from "../Employees.module.scss";

export default class NewEmployeForm extends React.Component {
  render() {
    return (
      <>
        <form className={styles.form}>
          <h3>Add new employee</h3>
          <label className={styles.label} htmlFor="firstName">
            First name:
          </label>
          <input
            type="text"
            placeholder="John"
            name="firstName"
            id="firstName"
          />
          <label className={styles.label} htmlFor="lastName">
            Last name:
          </label>
          <input type="text" placeholder="Smith" id="lastName" />
          <label className={styles.label} htmlFor="b-date">
            Date of birth:
          </label>
          <input type="date" placeholder="Smith" name="b-date" id="b-date" />
          <label className={styles.label} htmlFor="role">
            Role:
          </label>
          <select name="role" id="role">
            <option value="" hidden>
              --Please choose an option--
            </option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
            <option value="Administration">Administration</option>
            <option value="Other">Other</option>
          </select>
          <label className={styles.label} htmlFor="notifications">
            Notifications:
          </label>

          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <label htmlFor="notifications-on">
              Enabled{" "}
              <input type="radio" id="notifications-on" name="notifications" />
            </label>
            <label htmlFor="notifications-off">
              Disabled{" "}
              <input type="radio" id="notifications-off" name="notifications" />
            </label>
          </div>
        </form>
      </>
    );
  }
}
