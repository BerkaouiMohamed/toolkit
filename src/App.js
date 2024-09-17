import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosActions } from "./redux/store";
function App() {
  const ref = useRef();
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <h1>add to do</h1>
        <input type="text" ref={ref} />
        <button
          onClick={() =>
            dispatch(todosActions.addToDo({ title: ref.current.value }))
          }
        >
          submit
        </button>
      </div>

      <div>
        {todos.map((todo, i) => (
          <div key={i}>
            <h1>{todo.title}</h1> <button>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
