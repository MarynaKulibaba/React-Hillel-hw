import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ListGroup, Button } from "react-bootstrap";

const TodoItem = ({ todo, removeTodo }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <h5>{todo.title}</h5>
        <p>{todo.description}</p>
        <Link to={`/todo-items/${todo.id}`} state={{ todo }}>
          View Details
        </Link>
      </div>
      <Button variant="danger" onClick={() => removeTodo(todo.id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
