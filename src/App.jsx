import React from "react";
import Progress from "./components/Progress.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <Progress percentage={40} />
      </>
    );
  }
}
export default App;
