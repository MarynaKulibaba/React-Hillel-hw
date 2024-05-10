import { Component } from "react";
import { cloneDeep } from "lodash";
import { Form, Button } from "react-bootstrap";

const formInitialValue = {
  email: "",
  password: "",
  address: "",
};

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        ...formInitialValue,
      },
    };
  }

  handleChange = (event) => {
    const previousState = cloneDeep(this.state.formData);
    // console.log(previousState);
    // console.log(event.target);

    previousState[event.target.name] = event.target.value;
    this.setState({ formData: previousState });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    console.log(this.state.formData);
    this.setState({ formData: { ...formInitialValue } });
  };
  render() {
    const { email, password, address } = this.state.formData;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h4 className="text-center">Form</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            name="address"
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default MyForm;
