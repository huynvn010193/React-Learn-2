import React, { useId, useMemo, useState } from "react";
import StudentList from "./StudentList";
import studentListData from "./mocks/studentList.json";

const Form = () => {
  // useId():
  const id = useId();
  const [searchInput, setSearchInput] = useState("");

  // dùng useMemo để ghi nhớ lại giá trị của nó
  const data = useMemo(() => {
    return studentListData.map((student) => {
      const index = student.indexOf(searchInput);
      return index === -1 ? (
        <p>{student}</p>
      ) : (
        <p>
          {student.slice(0, index)}
          <span style={{ backgroundColor: "yellow" }}>
            {student.slice(index, index + searchInput.length)}
          </span>
          {student.slice(index + searchInput.length)}
        </p>
      );
    });
  }, [searchInput]);

  console.log("data", data);

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
