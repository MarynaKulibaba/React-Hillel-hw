import { Component } from "react";

class TodoItem extends Component {
  render() {
    const { task, onRemove } = this.props;
    return (
      <div>
        <div className="row mb-3">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={onRemove}
            >
              -
            </button>
          </div>
          <div className="col">{task.text}</div>
        </div>
        <hr />
      </div>
    );
  }
}

export default TodoItem;
