import React, { Component } from "react";
import PropTypes from "prop-types";

import { Input, Form, Label, Icon } from "semantic-ui-react";
import styled from "styled-components";
// import colors from "../../../constants/colors";

import FaEyeSlash from "react-icons/lib/fa/eye-slash";
import FaEye from "react-icons/lib/fa/eye";

const IconInput = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  line-height: 1;
  right: 0;
  z-index: 2;
  background: none;
  padding: 10px;
  border: 0;
  color: red;
  &:hover {
    color: red;
  }
  &:focus {
    outline: 0;
  }
`;

const propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string
  }),
  error: PropTypes.string,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool
};

const defaultProps = {
  label: "",
  placeholder: "",
  readOnly: false
};

class InputPassword extends Component {
  state = {
    show: false
  };

  handleToggle(e) {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    const {
      input,
      label,
      readOnly,
      placeholder,
      autoFocus,
      meta: { touched, error }
    } = this.props;
    // console.log(input.value, "!!!!");

    return (
      <Form.Field error={touched && error ? true : null}>
        {label && <label htmlFor={input.name}>{label}</label>}

        <Input
          {...input}
          autoFocus={autoFocus && autoFocus}
          id={input.name}
          type={!this.state.show ? "password" : "text"}
          readOnly={readOnly ? true : false}
          placeholder={placeholder ? placeholder : `Enter ${label}`}
          error={touched && error ? true : null}
          icon={
            <IconInput type="button" onClick={() => this.handleToggle()}>
              {this.state.show ? <FaEyeSlash /> : <FaEye />}
            </IconInput>
          }
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
}

InputPassword.propTypes = propTypes;
InputPassword.defaultProps = defaultProps;

export default InputPassword;
