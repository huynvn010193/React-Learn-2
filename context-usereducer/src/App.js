import "./App.css";
import { useStore, actions } from "./store";

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  console.log(todoInput, todos);

  return (
    <div>
      <input
        value={todoInput}
        placeholder='Enter  to do'
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />
    </div>
  );
}

export default App;
