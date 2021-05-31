const TodoItem = ({ name, completed, id, todos, setTodos }) => {
  var id_update = id;
  const handleCompleted = () => {
    fetch("/api/todos/" + id_update, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
  };

  return (
    <li
      onClick={handleCompleted}
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
