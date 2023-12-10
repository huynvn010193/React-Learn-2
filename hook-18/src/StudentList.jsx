import React from "react";

const StudentList = ({ data }) => {
  return (
    <>
      <div>StudentList</div>
      <div>
        {data.map((student) => (
          <p>{student}</p>
        ))}
      </div>
    </>
  );
};

export default StudentList;
