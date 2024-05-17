import { Component } from "react";
import { uniqueId } from "lodash";
import TodoItem from "../TodoItem";
import { Button, Form, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputValue: "",
    };
  }

  handleAddTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: uniqueId("task_"),
      text: this.state.inputValue,
    };
    this.setState((prevState) => ({
      tasks: [newTask, ...prevState.tasks],
      inputValue: "",
    }));
  };

  handleRemoveTask = (id) => () => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="mt-3">
        <Container className="mb-3">
          <Form className="d-flex mb-3" onSubmit={this.handleAddTask}>
            <FormControl
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              placeholder="I am going..."
              className="me-2"
              required
            />
            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
          <div>
            {this.state.tasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task.text}
                id={task.id}
                onRemove={this.handleRemoveTask(task.id)}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default TodoBox;
