import React, { Component } from "react";
import { Container, ListGroup, Alert } from "react-bootstrap";
import AlbumItem from "./AlbumItem";
import AlbumPhotos from "./AlbumPhotos";

class AlbumCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbumId: null,
      error: null,
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log(data);
      this.setState({ albums: data });
    } catch (error) {
      this.setState({ error: "Failed to fetch albums" });
    }
  }

  selectAlbum = (albumId) => {
    this.setState({ selectedAlbumId: albumId });
  };

  renderAlbums() {
    const { albums, error } = this.state;

    return (
      <Container>
        <h1 className="my-4">Albums</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <ListGroup>
          {albums.map((album, index) => (
            <AlbumItem
              key={album.id}
              album={album}
              onSelect={this.selectAlbum}
              index={index}
            />
          ))}
        </ListGroup>
      </Container>
    );
  }

  renderPhotos() {
    const { selectedAlbumId } = this.state;

    return (
      <AlbumPhotos
        albumId={selectedAlbumId}
        onBack={() => this.setState({ selectedAlbumId: null })}
      />
    );
  }

  render() {
    const { selectedAlbumId } = this.state;
    return selectedAlbumId ? this.renderPhotos() : this.renderAlbums();
  }
}

export default AlbumCatalog;
