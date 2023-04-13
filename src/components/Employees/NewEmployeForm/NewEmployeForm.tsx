import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../Employees.module.scss";
import NewEmployePreview from "./NewEmployePreview";
import { IEmployeCard } from "../EmployeesList/EmployeesList";
const categories = ["laptops", "smartphones", "tv", "computers", "appliance"];
import { RootReducer, RootState } from "../../../store/store";
import { useSelector } from "react-redux";
import { validateForm } from "../../../utils/validateForm";
import { useActions } from "../../../hooks/useActions";

interface INewEmployeFormProps {
  addNewEmploye: (e: IEmployeCard) => void;
}

export interface IFormData {
  firstName: string;
  lastName: string;
  birthDate: string;
  file: File[];
  email: string;
  group: string;
  category: {
    appliance: boolean;
    computers: boolean;
    laptops: boolean;
    smartphones: boolean;
    tv: boolean;
  };
}
export interface IErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  date?: string;
  img?: string;
}

const NewEmployeForm: React.FC<INewEmployeFormProps> = ({ addNewEmploye }) => {
  const formDataState = useSelector<RootState>(
    (state: RootState) => state.form
  );
  const { setFormData } = useActions();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: errorsLog },
    getValues,
  } = useForm<IFormData>({
    defaultValues: {
      ...formDataState.formData,
    },
  });
  const [isPreviewActive, setIsPreviewActive] = useState<boolean>(false);
  const [errors, setErrors] = useState<IErrors>({});
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
  const preview = React.useRef<HTMLImageElement>(null);
  const hidePreview = () => {
    setIsPreviewActive(false);
  };

  // console.log("storeSearchValue :", formDataState);

  const handleSubmitForm: SubmitHandler<IFormData> = async (
    data: IFormData
  ) => {
    let src = "";
    if (data.file[0]) {
      src = await URL.createObjectURL(data.file[0]);
    }

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

    setNewEmploye(newEmployeCard);
    if (validateForm(newEmployeCard, setErrors)) {
      setIsPreviewActive(true);
      reset();
    }
    return data;
  };

  const handleImageUpload = async (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
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

  return (
    <>
      {isPreviewActive ? (
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
            {...register("firstName", {
              onChange: () => setFormData(getValues()),
              required: "Name is required!",
              pattern: /^([A-Za-zА-Яа-яЁё]{3,})$/,
            })}
            aria-invalid={errorsLog.firstName ? "true" : "false"}
          />
          {errorsLog.firstName?.type === "pattern" && (
            <p role="alert" style={{ color: "red" }}>
              Invalid first name
            </p>
          )}
          {errorsLog.firstName?.type === "required" && (
            <p role="alert" style={{ color: "red" }}>
              First name is required
            </p>
          )}

          <label className={styles.label} htmlFor="lastName">
            Last name:
          </label>
          <input
            type="text"
            placeholder="Smith"
            id="lastName"
            {...register("lastName", {
              required: "Last name is required!",
              onChange: () => setFormData(getValues()),
            })}
          />
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            placeholder="test@test.com"
            id="email"
            {...register("email", {
              required: "Email is required!",
              onChange: () => setFormData(getValues()),
            })}
          />
          <label className={styles.label} htmlFor="birthDate">
            Date of birth:
          </label>
          <input
            type="date"
            id="birthDate"
            {...register("birthDate", {
              onChange: () => setFormData(getValues()),

              // required: "Date is required!",
              // pattern:
              //   /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])([\/.-])(19[789]\d|20[012]\d)/,
            })}
            aria-invalid={errorsLog.birthDate ? "true" : "false"}
          />

          <label className={styles.label} htmlFor="group">
            Group:
          </label>
          <select
            id="group"
            {...(register("group"),
            { onChange: () => setFormData(getValues()) })}
          >
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
                  {...register(`category.${category}`, {
                    onChange: (e) => {
                      console.log("test");
                      setFormData(getValues());
                    },
                  })}
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
            accept="image/*"
            {...(register("file"),
            { onChange: () => setFormData(getValues()) })}
            onChange={(event) => handleImageUpload(event)}
          />

          <img src="" className={styles.preview} alt="preview" ref={preview} />
          <input type="submit" value="Preview" />
          <div style={{ color: "red" }}>
            {Object.values(errors).length > 0
              ? Object.values(errors).join(", ")
              : ""}
          </div>
        </form>
      )}
    </>
  );
};

export default NewEmployeForm;
