import { useState } from "react";
import "./App.css";
import User from "./User";
import AutoBatching from "./AutoBatching";

function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="App">
      {/* {isShow && <User />}
      <button onClick={() => setIsShow((prevState) => !prevState)}>
        Change Ishow
      </button> */}

      <AutoBatching />
    </div>
  );
}

export default App;
