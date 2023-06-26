import React from "react";

import { Todo } from "../../types/types";

type TodoListProps = {
  todos: Todo[];
  deleteTodo: (title: string) => void;
};

export default function TodoList({ todos, deleteTodo }: TodoListProps) {
  const getColor = (status: string) => {
    switch (status) {
      case "not-started":
        return "red";
      case "in-progress":
        return "blue";
      case "done":
        return "green";
      default:
        return "black";
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title} style={{ color: getColor(todo.status) }}>
          {todo.title} - {todo.date} - {todo.status}
          <button onClick={() => deleteTodo(todo.title)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
