import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const TodoDetails = ({ location }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = location.state?.todo;

  if (!todo) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <h2>Task Details</h2>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Back to List
      </Button>
    </div>
  );
};

TodoDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      todo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default TodoDetails;
