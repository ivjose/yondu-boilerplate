import React from "react";
import PropTypes from "prop-types";
import {
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";

const propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool
};

const defaultProps = {
  label: '',
  type: 'text',
  placeholder: '',
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
  return (
    <FormGroup >
      {label && <Label for={input.name}>{label}</Label>}

      <Input
        autoFocus={autoFocus && autoFocus}
        {...input}
        id={input.name}
        type={type}
        readOnly={readOnly ? true : false}
        placeholder={placeholder ? placeholder : `Enter ${label}`}
        valid={touched && error ? false : null}
      />

      {touched &&
        error && (
          <FormFeedback className={touched && error && "text-danger"}>
            {error}
          </FormFeedback>
        )
      }
    </FormGroup>
  );
}

InputText.propTypes = propTypes;
InputText.defaultProps = defaultProps;

export default InputText;
