import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { ListGroup, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, description) => {
    if (!title || !description) {
      setError("Both title and description are required.");
      return;
    }

    const newTodo = { id: uuidv4(), title, description };
    setTodos([newTodo, ...todos]);
    setError("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <TodoForm addTodo={addTodo} />
      <ListGroup>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
