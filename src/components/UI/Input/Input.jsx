import { Form } from "react-bootstrap";
import { random } from "lodash";
// import placeholder from "lodash/fp/placeholder.js";
import PropTypes from "prop-types";

const Input = ({
  label = null,
  name = "",
  type = "text",
  placeholder = "Put your data here",
  value = "",
  onChange,
  ...restProps
}) => {
  const controlId = "form-input" + random(0, 1000);
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        onChange={onChange}
        {...restProps}
      />
    </Form.Group>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "number", "password", "email"]),
};
export default Input;
