import PropTypes from "prop-types";

const Title = ({ children }) => {
  return <h4 className="card-title">{children}</h4>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
