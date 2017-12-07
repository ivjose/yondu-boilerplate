import React from "react";
import PropTypes from "prop-types";
// import { FormGroup, Label, Input, FormFeedback } from "reactstrap";

import { Form, Checkbox, Label } from "semantic-ui-react";

const propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.bool
  }),
  error: PropTypes.string,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool
};

const defaultProps = {
  label: "",
  placeholder: "",
  readOnly: false,
  input: {
    value: false
  }
};

function InputCheckbox({
  input,
  label,
  type,
  text,
  readOnly,
  placeholder,
  meta: { touched, error }
}) {
  return (
    <Form.Field error={touched && error ? true : null}>
      {label && (
        <Label for={input.name} className="d-block">
          {label}
        </Label>
      )}
      <Checkbox
        label={text && text}
        {...input}
        id={input.name}
 
        value={input.value ? 'on' : 'off'}

        checked={input.value && input.value}
    
        readOnly={readOnly ? true : false}
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        error={touched && error ? true : null}
      />

      {touched &&
        error && (
          <Label basic color="red" pointing>
            {error}
          </Label>
        )}
    </Form.Field>
  );
}

InputCheckbox.propTypes = propTypes;
InputCheckbox.defaultProps = defaultProps;

export default InputCheckbox;
