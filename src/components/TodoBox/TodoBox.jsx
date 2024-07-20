import React, { useState } from "react";
import { uniqueId } from "lodash";
import TodoItem from "../TodoItem";
import { Button, Form, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";

const TodoBox = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: uniqueId("task_"),
      text: inputValue,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setInputValue("");
  };

  const handleRemoveTask = (id) => () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="mt-3">
      <Container className="mb-3">
        <Form className="d-flex mb-3" onSubmit={handleAddTask}>
          <FormControl
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="I am going..."
            className="me-2"
            required
          />
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
        <div>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task.text}
              id={task.id}
              onRemove={handleRemoveTask(task.id)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TodoBox;
