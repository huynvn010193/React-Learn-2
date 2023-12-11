import React, { useId, useMemo, useState, useTransition } from "react";
import StudentList from "./StudentList";
import studentListData from "./mocks/studentList.json";

const Form = () => {
  // useId():
  const id = useId();
  const [searchInput, setSearchInput] = useState("");
  const [filterText, setFilterText] = useState("");
  const [isPeding, startTransition] = useTransition();

  // dùng useMemo để ghi nhớ lại giá trị của nó
  const data = useMemo(() => {
    return studentListData.map((student) => {
      const index = student.indexOf(filterText);
      return index === -1 ? (
        <p>{student}</p>
      ) : (
        <p>
          {student.slice(0, index)}
          <span style={{ backgroundColor: "yellow" }}>
            {student.slice(index, index + filterText.length)}
          </span>
          {student.slice(index + filterText.length)}
        </p>
      );
    });
  }, [filterText]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    startTransition(() => {
      setFilterText(e.target.value);
    });
  };

  return (
    <>
      <h3>Form</h3>
      <label htmlFor={id}>Search Name: </label>
      <input
        type='text'
        name='name'
        id={id}
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      {isPeding ? <p>Loading...</p> : <StudentList data={data} />}
    </>
  );
};

export default Form;
