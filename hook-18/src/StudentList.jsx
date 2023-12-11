import React, { useDeferredValue } from "react";

const StudentList = ({ data }) => {
  const deferedValue = useDeferredValue(data);
  return (
    <>
      <div>StudentList</div>
      <div>
        {deferedValue.map((student) => (
          <p>{student}</p>
        ))}
      </div>
    </>
  );
};

export default StudentList;
