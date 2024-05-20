import { Component } from "react";
import { cloneDeep } from "lodash";
import { Form, Button } from "react-bootstrap";
import Input from "../UI/Input";
import PropTypes from "prop-types";

const formInitialValue = {
  email: "",
  password: "",
  address: "",
  city: "",
  country: "Ukraine",
  rules: "off",
};

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: props.formData
        ? { ...props.formData }
        : { ...formInitialValue },
    };
  }

  handleChange = (event) => {
    const previousState = cloneDeep(this.state.formData);
    if (event.target.name === "rules") {
      if (previousState[event.target.name] === "on") {
        previousState[event.target.name] = "off";
      } else {
        previousState[event.target.name] = "on";
      }
    } else {
      previousState[event.target.name] = event.target.value;
    }

    this.setState({ formData: previousState });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.formData);
    // console.log(event);
    // console.log(this.state.formData);
    this.setState({ formData: { ...formInitialValue } });
  };
  render() {
    const { email, password, address, city, country, rules } =
      this.state.formData;
    return (
      <Form onSubmit={this.handleSubmit}>
        <h4 className="text-center">Form</h4>
        <Input
          label="Email address"
          name="email"
          type="email"
          value={email}
          onChange={this.handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={this.handleChange}
        />
        <Input
          as="textarea"
          label="Address"
          name="address"
          value={address}
          onChange={this.handleChange}
        />
        <Input
          label="City"
          name="city"
          value={city}
          onChange={this.handleChange}
        />
        <Form.Select
          className="mb-3"
          aria-label="Default select example"
          name="country"
          value={country}
          onChange={this.handleChange}
        >
          <option>Open this select menu</option>
          <option value="Argentina">Argentina</option>
          <option value="Ukraine">Ukraine</option>
          <option value="China">China</option>
        </Form.Select>
        <Form.Check
          className="mb-3"
          type="switch"
          id="custom-switch"
          name="rules"
          label="Check this switch"
          onChange={this.handleChange}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
MyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    rules: PropTypes.oneOf(["on", "off"]),
  }),
};
export default MyForm;
