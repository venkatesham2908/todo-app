import TodoItem from "./TodoItem"

const TodoList = ({todos, deleteTodo}) =>{
    return(
        <div>
            {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
      ))}

        </div>
    )
}

export default TodoList;