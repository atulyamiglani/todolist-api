const TodoItem = ({ name, completed, id, todos, setTodos }) => {
  return (
    <li
      style={{
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {name}
      <span
        onClick={() =>
          fetch("/api/todos/" + id, {
            method: "DELETE",
          })
            .then((data) => data.json())
            .then(() => {
              const updatedtodos = todos.filter((todo) => todo._id !== id);
              setTodos(updatedtodos);
            })
        }
      >
        X
      </span>
    </li>
  );
};

export default TodoItem;
