import PropTypes from "prop-types";
import { ListGroup, Card } from "react-bootstrap";

const PostItem = ({ post }) => {
  return (
    <ListGroup.Item className="posts_single-post" data-post-id={post.id}>
      <Card>
        <Card.Body>
          <Card.Title className="posts__post-title">{post.title}</Card.Title>
          <Card.Subtitle className="posts__post-description">
            {post.body}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </ListGroup.Item>
  );
};

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostItem;
