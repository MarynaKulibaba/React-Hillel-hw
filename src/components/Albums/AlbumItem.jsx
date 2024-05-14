import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

const AlbumItem = ({ album, onSelect }) => {
  return (
    <ListGroup.Item
      action
      onClick={() => onSelect(album.id)}
      className="albums_single-album"
      data-album-id={album.id}
    >
      {album.title}
    </ListGroup.Item>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AlbumItem;
