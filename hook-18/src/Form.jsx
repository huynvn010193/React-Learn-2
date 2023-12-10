import React, { useId, useState } from "react";
import StudentList from "./StudentList";
import StudentListData from "./mocks/studentList.json";

const Form = () => {
  // useId():
  const id = useId();
  const data = StudentListData;
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <h3>Form</h3>
      <label htmlFor={id}>Search Name: </label>
      <input
        type="text"
        name="name"
        id={id}
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <StudentList data={data} />
    </>
  );
};

export default Form;
