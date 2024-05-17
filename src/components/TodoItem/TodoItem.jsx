import { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

class TodoItem extends Component {
  render() {
    const { task, onRemove } = this.props;
    return (
      <div className="row mb-3">
        <div className="col-auto">
          <Button variant="danger" size="sm" onClick={onRemove}>
            -
          </Button>
        </div>
        <div className="col">{task}</div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  task: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoItem;
