import { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import AlbumItem from "./AlbumItem";
import AlbumPhotos from "./AlbumPhotos";

class AlbumCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      selectedAlbumId: null,
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/albums");
      const data = await res.json();
      this.setState({ albums: data });
    } catch (error) {
      new Error();
    }
  }

  selectAlbum = (albumId) => {
    this.setState({ selectedAlbumId: albumId });
  };

  renderAlbums() {
    const { albums } = this.state;

    return (
      <Container>
        <h1 className="my-4">Albums</h1>
        <ListGroup>
          {albums.map((album) => (
            <AlbumItem
              key={album.id}
              album={album}
              onSelect={this.selectAlbum}
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
