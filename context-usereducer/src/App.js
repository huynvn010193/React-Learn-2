import "./App.css";
import { useStore } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { totos, todoInput } = state;
  return (
    <div>
      <input value={state.todoInput} placeholder="Enter  to do" />
    </div>
  );
}

export default App;
