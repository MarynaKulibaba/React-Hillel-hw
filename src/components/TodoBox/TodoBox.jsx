import { Component } from "react";
import { uniqueId } from "lodash";
import TodoItem from "../TodoItem";

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
      id: uniqueId(),
      text: this.state.inputValue,
    };
    this.setState((prevState) => ({
      tasks: [newTask, ...prevState.tasks],
      inputValue: "", // Очищення поля вводу
    }));
  };

  handleRemoveTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.handleAddTask}>
            <div className="me-3">
              <input
                type="text"
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                required
                className="form-control"
                placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
        <div>
          {this.state.tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onRemove={() => this.handleRemoveTask(task.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoBox;
