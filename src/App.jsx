import React from "react";
import Alert from "./components/Alert.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <Alert type="info" text="what is love?" />
      </>
    );
  }
}
export default App;
