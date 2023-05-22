import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";

export default function AutoBatching() {
  const [count, setCount] = useState(1);
  const [flag, setFlag] = useState(false);

  // function handleClick() {
  //   setCount((c) => c + 1);
  //   setFlag((f) => !f);
  // }

  useEffect(() => {
    setTimeout(() => {
      // Ép react phải re-render . Ảnh hưởng perfomance
      flushSync(() => {
        setCount((c) => c + 1);
      });
      flushSync(() => {
        setFlag((f) => !f);
      });
    }, 1000);
  }, []);

  console.log("render");

  return (
    <div>
      {/* <button onClick={handleClick}>Click here</button> */}
      AutoBatching
    </div>
  );
}
