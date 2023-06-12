import React, { memo } from "react";

const Content = ({ onIncrease }) => {
  console.log("re-render");
  return (
    <>
      <h2>Content</h2>
      <button onClick={onIncrease}>Click Me</button>
    </>
  );
};

export default memo(Content);
