import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from './components/form';
import Todolist from './components/todolist';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Fetch initial data
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fetch todos from an API
  const fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4');
      const todo = await response.json();
      setTodos(todo);
    } catch (error) {
      console.log('Error fetching todos:', error);
    }
  };

  //update filteredTodods
  useEffect (() => {
    filterHandler();
  }, [todos, status]);

  //Function for filtering todos:
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form 
        inputText = { inputText } 
        todos = { todos } 
        setTodos = { setTodos } 
        setInputText = { setInputText }
        setStatus = { setStatus }
      />
      <Todolist 
        setTodos = { setTodos } 
        todos={ todos } 
        filteredTodos = { filteredTodos }
      />
    </div>
  );
}

export default App;
