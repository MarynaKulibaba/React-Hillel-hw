import { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import PostItem from "../Post";

class PostCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      this.setState({ posts: data });
    } catch (error) {
      throw new Error();
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {posts.map((post) => (
                <PostItem key={post.id} post={post} />
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostCatalog;
