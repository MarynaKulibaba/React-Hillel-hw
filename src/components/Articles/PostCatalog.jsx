import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import PostItem from "../Post";

const PostCatalog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts().catch((error) => {
      console.error("Error during fetchPosts execution:", error);
    });
  }, []);

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
};

export default PostCatalog;
