import { Form } from "react-bootstrap";
import { random } from "lodash";
import placeholder from "lodash/fp/placeholder.js";

const Input = ({ label, name, type, placeholder, value, onChange }) => {
  const controllId = "form-input" + random(0, 1000);
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

Input.defaultProps = {
  label: null,
  name: "",
  type: "text",
  placeholder: "Put your data here",
  value: "",
  onChange: (e) => {
    console.log(e.target.value);
  },
};

export default Input;
