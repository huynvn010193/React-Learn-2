import { useReducer } from "react";
import "./App.css";

// useReducer
// 1. Init State
// 2. Action (Up/Down)
// 3. Reducer
// 4. Dispatch

const initState = 0;

const UP_ACTION = "up";
const DOWN_ACTION = "down";

const reducer = (state, action) => {
  console.log("reducer running");
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
};

function App() {
  // useReducer: có 2 đối số : 1 - reducer , 2 - initState
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div style={{ padding: "0 20px" }}>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

export default App;
