import { Component } from "react";
import { Button } from "react-bootstrap";
import Log from "../Log";
import { uniqueId } from "lodash";

class LogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      logs: [],
    };
  }

  handleClick = (increment) => {
    this.setState((prevState) => {
      const newValue = increment ? prevState.value + 1 : prevState.value - 1;
      return {
        value: newValue,
        logs: [{ id: uniqueId("log_"), value: newValue }, ...prevState.logs],
      };
    });
  };

  handleDelete = (logId) => {
    this.setState((prevState) => ({
      logs: prevState.logs.filter((log) => log.id !== logId),
    }));
  };

  render() {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <Button
            variant="outline-success"
            onClick={() => this.handleClick(true)}
          >
            +
          </Button>
          <Button
            variant="outline-danger"
            onClick={() => this.handleClick(false)}
          >
            -
          </Button>
        </div>
        <div className="list-group">
          {this.state.logs.map((log) => (
            <Log
              key={log.id}
              data={log.value}
              id={log.id}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default LogList;
