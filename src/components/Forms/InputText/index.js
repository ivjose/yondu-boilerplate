import React from "react";
import PropTypes from "prop-types";

import { Button, Input, Form, Label } from "semantic-ui-react";

const propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool
};

const defaultProps = {
  label: "",
  type: "text",
  placeholder: "",
  readOnly: false
};

function InputText({
  input,
  label,
  type,
  readOnly,
  placeholder,
  autoFocus,
  meta: { touched, error }
}) {
  console.log("INPUT TEXT!!", touched);
  return (
    <Form.Field error={touched && error ? true : null}>
      {label && <label htmlFor={input.name}>{label}</label>}
      <Input
        autoFocus={autoFocus && autoFocus}
        {...input}
        id={input.name}
        type={type}
        readOnly={readOnly ? true : false}
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        error={touched && error ? true : null}
      />
      {
        touched &&
        error && ( <Label basic color='red' pointing>{error}</Label>)
      }
  
    </Form.Field>
  );
}

InputText.propTypes = propTypes;
InputText.defaultProps = defaultProps;

export default InputText;
