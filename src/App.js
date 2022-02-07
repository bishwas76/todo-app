import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'

function App() {
  
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodo] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <AddTodo 
        setInputTodo = {setInputTodo} 
        setTodo = {setTodo} 
        todos = {todos} 
        inputTodo = {inputTodo} 
      />
      <TodoList 
        setTodo = {setTodo} 
        todos = {todos} />
    </div>
  );
}

export default App;
