import React from "react";

class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    if (!children) return null;
    return (
      <ul className="list-group">
        {React.Children.map(children, (child) => {
          return <li className="list-group-item">{child}</li>;
        })}
      </ul>
    );
  }
}

export default ListGroup;
