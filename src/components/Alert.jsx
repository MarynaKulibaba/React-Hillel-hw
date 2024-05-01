import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

class Alert extends React.Component {
  render() {
    const { type, text } = this.props;
    const alertClass = cn("alert", `alert-${type}`);
    return (
      <div className={alertClass} role="alert">
        {text}
      </div>
    );
  }
}

Alert.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]).isRequired,
  text: PropTypes.string.isRequired,
};

export default Alert;
