import { useEffect, useState } from "react";
import TodoItem from './todoItem';
import TodoForm from './TodoForm';


function TodoList() {

    let [todos, setTodos] = useState([]);

    // stateWillMount in functional component
    useEffect( () => {
        fetch('/api/todos')
        .then( data => data.json())
        
        .then(todos => setTodos(todos))
        //.catch(err => console.log(err));
     }, []);
        
    const todosList = todos.map((t) => (
        <TodoItem 
        key= {t._id}
        {...t}
        />
    ));
    
    return (
        <div> 
            <h1>Todo List</h1>
            <TodoForm  />
            <ul>{todosList}</ul>

        </div>

    );
}

export default TodoList;