import { useState } from "react";

const TodoForm = ({addTodo}) => {

    const [text, setText] = useState('');

    console.log(text);
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(text.trim()){
            addTodo(text);
            setText("");
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Todo..." value={text} onChange={(e)=> setText(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;