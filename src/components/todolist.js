import React from "react";
//import Components
import Todo from './Todo';

const Todolist = ({ todos, setTodos, filteredTodos }) => {
    return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
            <Todo 
                todo = { todo }
                todos = { todos }
                key={todo.id} 
                title={todo.title} 
                setTodos={ setTodos }
            />
        ))}
      </ul>
    </div>
    );
};

export default Todolist;