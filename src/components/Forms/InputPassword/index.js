import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormGroup, Label, Input, FormText, FormFeedback } from "reactstrap";

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
  label: '', 
  placeholder: '',
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
      <FormGroup>
        <Label>{label} </Label>

        <div style={{ position: "relative", zIndex: 1 }}>
          <Input
      
            {...input}
            autoFocus={autoFocus && autoFocus}
            type={!this.state.show ? "password" : "text"}
            readOnly={readOnly ? true : false}
            placeholder={placeholder ? placeholder : `Enter ${label}`}
            valid={touched && error ? false : null}
          />
          <IconInput type="button" onClick={() => this.handleToggle()}>
            {this.state.show ? <FaEyeSlash /> : <FaEye />}
          </IconInput>

          {touched &&
            error && (
              <FormFeedback className={touched && error && "text-danger"}>
                {error}
              </FormFeedback>
            )
          }
        </div>

        
      </FormGroup>
    );
  }
}

InputPassword.propTypes = propTypes;
InputPassword.defaultProps = defaultProps;

export default InputPassword;
