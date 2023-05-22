import React from "react";
import { useState } from "react";

export default function RuleOfHook() {
  const [name, setName] = useState("Mary");
  console.log("render");
  return (
    <div>
      <button onClick={() => setName("Alex")}>Change Name</button>
      RuleOfHook
    </div>
  );
}
