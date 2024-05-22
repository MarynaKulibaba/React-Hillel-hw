import { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class AlbumPhotos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      error: null,
    };
  }

  async componentDidMount() {
    const { albumId } = this.props;
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
      );
      const data = await res.json();
      this.setState({ photos: data });
    } catch (error) {
      this.setState({ error: "Failed to fetch photos" });
    }
  }

  render() {
    const { photos, error } = this.state;
    const { onBack } = this.props;

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <Container>
        <Button className="my-4" onClick={onBack}>
          Back to Albums
        </Button>
        <h1 className="my-4">Photos</h1>
        <Row>
          {photos.map((photo) => (
            <Col key={photo.id} sm={12} md={6} lg={4} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={photo.thumbnailUrl} />
                <Card.Body>
                  <Card.Title>{photo.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

AlbumPhotos.propTypes = {
  albumId: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default AlbumPhotos;
