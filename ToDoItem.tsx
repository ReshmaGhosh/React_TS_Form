import React, { useState } from "react";

import { Todo } from "../../types/types";

type TodoItemProps = {
  addTodo: (todo: Todo) => void;
};

export default function ToDoItem({ addTodo }: TodoItemProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("not-started");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo({ title, date, status });
    setTitle("");
    setDate("");
    setStatus("not-started");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
      </label>
      <label>
        Progress:
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="not-started">Not started</option>
          <option value="in-progress">In progress</option>
          <option value="done">Done</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
