import React, { useState } from "react";
import NewEmployeForm from "../NewEmployeForm/NewEmployeForm";

const AddEmploye: React.FC = () => {
  const [isFormShown, setIsFormShown] = useState<boolean>(false);
  return (
    <>
      {isFormShown ? (
        <NewEmployeForm />
      ) : (
        <button onClick={() => setIsFormShown(true)}>New employe</button>
      )}
    </>
  );
};

export default AddEmploye;
