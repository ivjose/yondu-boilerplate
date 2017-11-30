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
    value: PropTypes.bool
  }),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string
  }),

  placeholder: PropTypes.string,
  readOnly: PropTypes.bool
};

const defaultProps = {
  label: '',
  placeholder: '',
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
  console.log(input,"Cjeck");
  return (
    <FormGroup check>
      {label && <Label for={input.name} className="d-block">{label}</Label>}
      <Label check>
     
        <Input
          {...input}
          id={input.name}
          checked={input.value}

          type="checkbox"
          readOnly={readOnly ? true : false}
          placeholder={placeholder ? placeholder : `Enter ${label}`}
          valid={touched && error ? false : null}
        />
        {text}
      </Label>
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

InputCheckbox.propTypes = propTypes;
InputCheckbox.defaultProps = defaultProps;

export default InputCheckbox;
