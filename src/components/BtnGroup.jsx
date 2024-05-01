import React from "react";
import cn from "classnames";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: null,
    };
  }

  handleClick = (button) => {
    this.setState({ activeButton: button });
  };

  render() {
    const { activeButton } = this.state;

    const btnClassLeft = cn("btn", {
      "btn-primary": activeButton === "left",
      "btn-secondary": activeButton !== "left",
    });

    const btnClassRight = cn("btn", {
      "btn-primary": activeButton === "right",
      "btn-secondary": activeButton !== "right",
    });

    return (
      <div className="btn-group" role="group">
        <button
          onClick={() => this.handleClick("left")}
          className={btnClassLeft}
          type="button"
        >
          Left
        </button>
        <button
          onClick={() => this.handleClick("right")}
          type="button"
          className={btnClassRight}
        >
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
