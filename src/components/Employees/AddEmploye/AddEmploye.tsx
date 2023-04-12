import React, { useState } from "react";
import NewEmployeForm from "../NewEmployeForm/NewEmployeForm";
import { IEmployeCard } from "../EmployeesList/EmployeesList";

interface IAddEmployeProps {
  addNewEmploye: (e: IEmployeCard) => void;
}

const AddEmploye: React.FC<IAddEmployeProps> = ({ addNewEmploye }) => {
  const [isFormShown, setIsFormShown] = useState<boolean>(false);
  return (
    <>
      {isFormShown ? (
        <NewEmployeForm addNewEmploye={addNewEmploye} />
      ) : (
        <button onClick={() => setIsFormShown(true)}>New employe</button>
      )}
    </>
  );
};

export default AddEmploye;
