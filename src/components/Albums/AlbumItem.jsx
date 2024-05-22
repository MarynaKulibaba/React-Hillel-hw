import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

const AlbumItem = ({ album, onSelect, index }) => {
  return (
    <ListGroup.Item
      action
      onClick={() => onSelect(album.id)}
      data-album-id={album.id}
    >
      {index + 1}. {album.title}
    </ListGroup.Item>
  );
};

AlbumItem.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default AlbumItem;
