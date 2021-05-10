import { useEffect, useState } from "react";
import TodoItem from "./todoItem";
import TodoForm from "./TodoForm";

function TodoList() {
  let [todos, setTodos] = useState([]);

  // stateWillMount in functional component
  useEffect(() => {
    fetch("/api/todos")
      .then((data) => data.json())

      .then((todos) => setTodos(todos));
    //.catch(err => console.log(err));
  }, []);

  const todosList = todos.map((t) => (
    <TodoItem
      key={t._id}
      {...t}
      id={t._id}
      completed={t.completed}
      todos={todos}
      setTodos={setTodos}
    />
  ));

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <ul>{todosList}</ul>
    </div>
  );
}

export default TodoList;
