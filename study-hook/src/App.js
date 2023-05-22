import { useState } from "react";
import "./App.css";
import Cart from "./Header/Cart";
import Navigation from "./Header/Navigation";
// import User from "./User";
// import AutoBatching from "./AutoBatching";
// import RuleOfHook from "./ruleOfHook";

function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="App">
      {/* {isShow && <User />}
      <button onClick={() => setIsShow((prevState) => !prevState)}>
        Change Ishow
      </button> */}

      {/* <AutoBatching /> */}
      {/* <RuleOfHook /> */}
      <Cart />
      <Navigation />
    </div>
  );
}

export default App;
