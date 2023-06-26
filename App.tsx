import React, { useState } from "react";

import "./App.css";
import ToDoList from "./components/toDoList/ToDoList";
import ToDoItem from "./components/toDoList/ToDoItem";
import ProductList from "./components/searchProducts/ProductList";
import { Todo } from "./types/types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    // Check for uniqueness of todo title
    if (!todos.find((existingTodo) => existingTodo.title === todo.title)) {
      setTodos([...todos, todo]);
    } else {
      alert("Title should be unique");
    }
  };

  const deleteTodo = (title: string) => {
    setTodos(todos.filter((todo) => todo.title !== title));
  };

  return (
    <div>
      <ToDoItem addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
export default App;
