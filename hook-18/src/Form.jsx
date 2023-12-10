import React, { useId } from "react";
import StudentList from "./StudentList";
import StudentListData from "./mocks/studentList.json";

const Form = () => {
  // useId():
  const id = useId();
  const data = StudentListData;
  return (
    <>
      <h3>Form</h3>
      <label htmlFor={id}>Search Name: </label>
      <input type='text' name='name' id={id} />
      <StudentList data={data} />
    </>
  );
};

export default Form;
