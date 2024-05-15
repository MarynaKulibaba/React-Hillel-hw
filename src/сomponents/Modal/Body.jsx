import PropTypes from "prop-types";

const Body = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
