import React from "react";
import styles from "../Employees.module.scss";
import NewEmployePreview from "./NewEmployePreview";
import { IEmployeCard } from "../EmployeesList/EmployeesList";
const categories = ["laptops", "smartphones", "tv", "computers", "appliance"];

interface INewEmployeFormProps {
  addNewEmploye: (e: IEmployeCard) => void;
}

interface IErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  date?: string;
}
interface INewEmployeFormState {
  isPreviewActive: boolean;
  errors: IErrors;
}
export default class NewEmployeForm extends React.Component<INewEmployeFormProps> {
  state: INewEmployeFormState = {
    isPreviewActive: false,
    errors: {},
  };
  hidePreview = () => {
    this.setState({ isPreviewActive: false });
  };
  handleHidePreview = this.hidePreview.bind(this);
  newEmploye: IEmployeCard = {
    id: 0,
    firstName: "",
    lastName: "",
    img: "",
    email: "",
    birthDate: "",
    isNotificationsEnabled: false,
    accessCategories: [],
    group: "",
  };
  firstName = React.createRef<HTMLInputElement>();
  lastName = React.createRef<HTMLInputElement>();
  birthDate = React.createRef<HTMLInputElement>();
  email = React.createRef<HTMLInputElement>();
  role = React.createRef<HTMLSelectElement>();
  preview = React.createRef<HTMLImageElement>();
  onSubmit = this.handleSubmit.bind(this);

  laptops = React.createRef<HTMLInputElement>();
  smartphones = React.createRef<HTMLInputElement>();
  computers = React.createRef<HTMLInputElement>();
  tv = React.createRef<HTMLInputElement>();
  appliance = React.createRef<HTMLInputElement>();
  categoriesRefs = [
    this.laptops,
    this.smartphones,
    this.computers,
    this.tv,
    this.appliance,
  ];
  img = "";

  handleSubmit(event: React.SyntheticEvent) {
    if (
      !this.firstName.current ||
      !this.lastName.current ||
      !this.email.current ||
      !this.birthDate.current ||
      !this.role.current
    )
      return;

    const newEmployeCard: IEmployeCard = {
      id: Date.now(),
      firstName: this.firstName.current.value,
      lastName: this.lastName.current.value,
      email: this.email.current.value,
      birthDate: this.birthDate.current.value,
      isNotificationsEnabled: true,
      group: this.role.current.value,
      accessCategories: this.categoriesRefs
        .filter((el: React.RefObject<HTMLInputElement>) => el.current?.checked)
        .map((el) => el.current?.name),
      img: this.img,
    };
    this.newEmploye = newEmployeCard;
    if (this.validateForm()) {
      this.setState({ ...this.state, isPreviewActive: true });
    }
    event.preventDefault();
  }

  handleImageUpload(event: React.SyntheticEvent) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      if (this.preview.current) this.preview.current.style.display = "flex";
      for (let i = 0; i < target.files.length; i++) {
        const src = URL.createObjectURL(target.files[i]);
        if (this.preview.current) this.preview.current.src = src;
        this.img = src;
      }
    }
  }

  validateForm = () => {
    const errors: IErrors = {};
    const email = this.email.current;
    const firstName = this.firstName.current;
    const lastName = this.lastName.current;
    const date = this.birthDate.current;
    let isValid = true;

    if (email && !email.value) {
      errors.email = "Email is required";
      isValid = false;
    } else delete errors.email;

    if (email && !/\S+@\S+\.\S+/.test(email.value)) {
      errors.email = "Invalid email address";
      isValid = false;
    } else delete errors.email;

    if (lastName && !/^([A-Za-zА-Яа-яЁё]{3,})$/.test(lastName.value)) {
      errors.lastName = "Invalid last name";
      isValid = false;
    } else delete errors.lastName;

    if (firstName && !/^([A-Za-zА-Яа-яЁё]{3,})$/.test(firstName.value)) {
      errors.firstName = "Invalid first name";
    } else delete errors.firstName;

    if (
      (date && Number(date.value.split("-")[0]) < 1900) ||
      (date && Number(date.value.split("-")[0]) > 2020)
    ) {
      errors.date = "Invalid date";
    } else delete errors.date;

    this.setState({
      ...this.state,
      errors: { ...errors },
    });

    return isValid;
  };

  render() {
    return (
      <>
        {this.state.isPreviewActive && this.newEmploye ? (
          <NewEmployePreview
            employe={this.newEmploye}
            addNewEmploye={this.props.addNewEmploye}
            hidePreview={this.hidePreview}
          />
        ) : (
          <form
            className={styles.form}
            onSubmit={this.onSubmit}
            data-testid="form"
          >
            <h3>Add new employee</h3>
            <label className={styles.label} htmlFor="firstName">
              First name:
            </label>
            <input
              type="text"
              placeholder="John"
              name="firstName"
              id="firstName"
              ref={this.firstName}
              required
            />
            <label className={styles.label} htmlFor="lastName">
              Last name:
            </label>
            <input
              type="text"
              placeholder="Smith"
              id="lastName"
              ref={this.lastName}
              required
            />
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              placeholder="test@test.com"
              id="email"
              ref={this.email}
              required
            />
            <label className={styles.label} htmlFor="b-date">
              Date of birth:
            </label>
            <input type="date" name="b-date" id="b-date" ref={this.birthDate} />
            <label className={styles.label} htmlFor="role">
              Role:
            </label>
            <select name="role" id="role" ref={this.role} required>
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
                <input
                  type="radio"
                  id="notifications-on"
                  name="notifications"
                  checked
                />
              </label>
              <label htmlFor="notifications-off">
                Disabled{" "}
                <input
                  type="radio"
                  id="notifications-off"
                  name="notifications"
                />
              </label>
            </div>
            <label className={styles.label} htmlFor="Access categories">
              Access categories
            </label>
            {categories.map((category, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id="category"
                  name={category}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  ref={this[category as keyof this]}
                ></input>
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
            <label className={styles.label} htmlFor="file">
              Upload a photo
            </label>
            <input
              type="file"
              id="file"
              accept="image/*"
              name="file"
              onChange={(event) => this.handleImageUpload(event)}
            />
            <img
              src=""
              className={styles.preview}
              alt="preview"
              ref={this.preview}
            />
            <input type="submit" value="Preview" />
            <div style={{ color: "red" }}>
              {Object.values(this.state.errors).length > 0
                ? Object.values(this.state.errors).join(", ")
                : ""}
            </div>
          </form>
        )}
      </>
    );
  }
}
