import MyForm from "./components/myForm";
import DataTable from "./components/DataTable";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Component } from "react";
import { cloneDeep } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      UIShowTable: false,
    };
  }
  onSubmitHandler = (formData) => {
    const formDataCopy = cloneDeep(formData);
    this.setState({ data: formDataCopy, UIShowTable: true });
  };
  handleClick = (e) => {
    console.log(e);
    this.setState({ UIShowTable: false });
  };
  render() {
    return (
      <Container>
        {!this.state.UIShowTable && (
          <MyForm onSubmit={this.onSubmitHandler} formData={this.state.data} />
        )}
        {this.state.UIShowTable && (
          <DataTable
            tableData={this.state.data}
            onClickBack={this.handleClick}
          ></DataTable>
        )}
      </Container>
    );
  }
}

export default App;
