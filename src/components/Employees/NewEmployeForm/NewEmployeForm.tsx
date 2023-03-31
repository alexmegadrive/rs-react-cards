import React, { useState, useRef, createRef } from "react";
import { useForm } from "react-hook-form";
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
  img?: string;
}

const NewEmployeForm = ({ addNewEmploye }: INewEmployeFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: errorsLog },
  } = useForm();
  const [isPreviewActive, setIsPreviewActive] = useState(false);
  const [errors, setErrors] = useState({});
  const [test, setTest] = useState("...");
  const [newEmploye, setNewEmploye] = useState<IEmployeCard>({
    id: 0,
    firstName: "",
    lastName: "",
    img: "",
    email: "",
    birthDate: "",
    isNotificationsEnabled: false,
    accessCategories: [],
    group: "",
  });
  const hidePreview = () => {
    setIsPreviewActive(false);
  };

  const preview = useRef<HTMLImageElement>(null);
  const laptops = useRef<HTMLInputElement>(null);
  const smartphones = useRef<HTMLInputElement>(null);
  const computers = useRef<HTMLInputElement>(null);
  const tv = useRef<HTMLInputElement>(null);
  const appliance = useRef<HTMLInputElement>(null);
  const categoriesRefs = [laptops, smartphones, computers, tv, appliance];

  const handleSubmitForm = async (data) => {
    console.log("test");
    let src = "";
    if (data.file[0]) {
      src = await URL.createObjectURL(data.file[0]);
      setTest(data.file[0].name);
      console.log("data.file[0].name :", data.file[0].name);
      console.log("test :");
    } else setTest("222");
    console.log("test 222:");
    console.log("src :", src);

    const newEmployeCard: IEmployeCard = {
      id: Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      birthDate: data.birthDate,
      isNotificationsEnabled: true,
      group: data.group,
      accessCategories: [],
      img: src,
    };
    console.log("newEmployeCard :", newEmployeCard);

    setNewEmploye(newEmployeCard);
    setTimeout(() => {
      if (validateForm(newEmployeCard)) {
        setIsPreviewActive(true);
      }
    }, 0);
    reset();
    return data;
  };

  const handleImageUpload = async (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      if (preview.current) preview.current.style.display = "flex";
      for (let i = 0; i < target.files.length; i++) {
        const src = await URL.createObjectURL(target.files[i]);
        if (preview.current) preview.current.src = src;
        const newEmployeCard = { ...newEmploye, img: src };
        await setNewEmploye(newEmployeCard);
        setNewEmploye({ ...newEmployeCard, img: src });
      }
    }
  };

  const validateForm = (newEmploye: IEmployeCard) => {
    const { email, firstName, lastName, birthDate: date, img } = newEmploye;
    const errorsLog: IErrors = {};
    let isValid = true;

    if (!email) {
      errorsLog.email = "Email is required";
      isValid = false;
    } else delete errorsLog.email;

    if (!img) {
      errorsLog.img = "Image is required";
      isValid = false;
    } else delete errorsLog.img;

    if (email && !/\S+@\S+\.\S+/.test(email)) {
      errorsLog.email = "Invalid email address";
      isValid = false;
    } else delete errorsLog.email;

    if (lastName && !/^([A-Za-zА-Яа-яЁё]{3,})$/.test(lastName)) {
      errorsLog.lastName = "Invalid last name";
      isValid = false;
    } else delete errorsLog.lastName;

    if (firstName && !/^([A-Za-zА-Яа-яЁё]{3,})$/.test(firstName)) {
      errorsLog.firstName = "Invalid first name";
    } else delete errorsLog.firstName;

    if (
      (date && Number(date.split("-")[0]) < 1900) ||
      (date && Number(date.split("-")[0]) > 2020) ||
      (date && !date.length)
    ) {
      errorsLog.date = "Invalid date";
      isValid = false;
    } else delete errorsLog.date;

    // this.setState({
    //   ...this.state,
    //   errors: { ...errors },
    // });
    setErrors(errorsLog);

    console.log("errors :", errorsLog);

    return isValid;
  };

  return (
    <>
      {isPreviewActive && newEmploye ? (
        <NewEmployePreview
          employe={newEmploye}
          addNewEmploye={addNewEmploye}
          hidePreview={hidePreview}
        />
      ) : (
        <form
          className={styles.form}
          onSubmit={handleSubmit(handleSubmitForm)}
          data-testid="form"
        >
          <h3>Add new employee</h3>
          <label className={styles.label} htmlFor="firstName">
            First name:
          </label>
          <input
            type="text"
            placeholder="John"
            id="firstName"
            {...register("firstName", { required: "Name is required!" })}
            // required
          />
          <label className={styles.label} htmlFor="lastName">
            Last name:
          </label>
          <input
            type="text"
            placeholder="Smith"
            id="lastName"
            {...register("lastName", { required: "Last name is required!" })}
            required
          />
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            placeholder="test@test.com"
            id="email"
            {...register("email", { required: "Email is required!" })}
            required
          />
          <label className={styles.label} htmlFor="birthDate">
            Date of birth:
          </label>
          <input
            type="date"
            id="birthDate"
            {...register("birthDate", { required: "Date is required!" })}
          />
          <label className={styles.label} htmlFor="group">
            Group:
          </label>
          <select id="group" {...register("group")} required>
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
                defaultChecked
              />
            </label>
            <label htmlFor="notifications-off">
              Disabled{" "}
              <input type="radio" id="notifications-off" name="notifications" />
            </label>
          </div>
          <label className={styles.label} htmlFor="Access categories">
            Access categories
          </label>
          {categories.map((category, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  id="category"
                  {...register(`${category}`)}
                ></input>
                <label htmlFor={category}>{category}</label>
              </div>
            );
          })}
          <label className={styles.label} htmlFor="file">
            Upload a photo
          </label>

          <input
            type="file"
            id="file"
            // data-testid="file"
            accept="image/*"
            {...register("file", { required: "file is required!" })}
            onChange={(event) => handleImageUpload(event)}
          />

          <img src="" className={styles.preview} alt="preview" ref={preview} />
          <input type="submit" value="Preview" />
          <div style={{ color: "red" }}>
            {Object.values(errors).length > 0
              ? Object.values(errors).join(", ")
              : ""}
          </div>
          {/* <div>{test}</div> */}
        </form>
      )}
    </>
  );
};

export default NewEmployeForm;
