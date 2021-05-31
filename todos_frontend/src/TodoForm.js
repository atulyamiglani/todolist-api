import { useState } from "react";
//import TodoList from './TodoList'

function TodoForm(props) {
  let oldTodos = props.todos;
  let setTodos = props.setTodos;

  let [input, setInput] = useState("lollll!");

  const handleChange = (e) => {
    input = e.target.value;
    setInput(input);
  };

  const handleSubmit = () => {
    fetch("/api/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: input,
      }),
    })
      .then((data) => data.json())
      .then((newTodo) => setTodos([newTodo, ...oldTodos]));
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange}></input>

      <button onClick={handleSubmit}>Add Todo </button>
    </div>
  );
}

export default TodoForm;
