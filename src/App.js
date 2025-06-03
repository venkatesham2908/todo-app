import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([ ]);

  useEffect(()=>{
    const stored = localStorage.getItem('todos');
    if(stored){
      setTodos(JSON.parse(stored))
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, text])
  }

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <div className='app'>
    <h1>Todo App</h1>
    <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
