import React from "react";
import cn from "classnames";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: this.props.opened,
    };
  }
  toggleOpen = () => {
    this.setState((prevState) => ({
      opened: !prevState.opened,
    }));
  };
  render() {
    const { text } = this.props;
    const { opened } = this.state;
    const isShow = cn("collapse", opened ? "show" : "");
    const isExpanded = cn(opened ? "true" : "false");
    return (
      <div>
        <p>
          <a
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={isExpanded}
            onClick={this.toggleOpen}
          >
            Link with href
          </a>
        </p>
        <div className={isShow}>
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}
Collapse.defaultProps = {
  text: "collapse me",
  opened: true,
};
export default Collapse;
