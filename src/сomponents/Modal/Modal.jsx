import { Component } from "react";
import PropTypes from "prop-types";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";
import cn from "classnames";

class Modal extends Component {
  static Header = Header;
  static Body = Body;
  static Footer = Footer;

  render() {
    const modalClassName = cn("modal", { "fade show": this.props.isOpen });

    const styleDisplay = this.props.isOpen ? "block" : "none";

    const { children } = this.props;
    return (
      <div
        className={modalClassName}
        style={{ display: styleDisplay }}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
