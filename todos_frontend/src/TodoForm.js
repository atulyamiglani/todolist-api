import { useState } from "react";
//import updateChanges from './TodoList'

function TodoForm() {

    let [input, setInput] = useState("lollll!");

    const handleChange = (e) => {
        input = e.target.value;
        setInput(input)
    } 

            

    const handleSubmit = () => {
    fetch('/api/todos', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: input,
  })
  

    })
    .then(() => {
        console.log("change this!");
    })
    
    }

    return (
        <div>
            <input type ='text'
             value = {input}
             onChange = {handleChange}
            >
            </input>

            <button
            onClick = {handleSubmit}>Add Todo </button>

        </div>
    )

}

export default TodoForm; 
