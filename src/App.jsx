import MyForm from "./components/myForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Component } from "react";
import { cloneDeep } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  onSubmitHandler = (formData) => {
    const formDataCopy = cloneDeep(formData);
    this.setState({ data: formDataCopy });
  };
  render() {
    return (
      <Container>
        <MyForm onSubmit={this.onSubmitHandler} />
      </Container>
    );
  }
}

export default App;
