import { IEmployeCard } from "../components/Employees/EmployeesList/EmployeesList";
import { IErrors } from "../components/Employees/NewEmployeForm/NewEmployeForm";

export const validateForm = (
  newEmploye: IEmployeCard,
  errorsCallback: (errors: IErrors) => void
) => {
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
    (date && !date.length) ||
    !date
  ) {
    errorsLog.date = "Invalid date";
    isValid = false;
  } else delete errorsLog.date;

  errorsCallback(errorsLog);

  return isValid;
};
