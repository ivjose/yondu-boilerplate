import React, { Component } from 'react';
import { connect } from "react-redux";
import {  Link } from "react-router-dom";
import { Alert } from "reactstrap";
import { submitFormAction } from '../../../actions';

import ChangePasswordFields from './components/ChangePasswordFields';

class ChangePassword extends Component {

    handleFormSubmit = values => {
        const { submitFormAction } = this.props;
        // console.log(values, "TEST");
        return submitFormAction("/auth/change-password", values, "ChangePasswordFieldsForm");
      };


    render() {


        const {
            submitResponse
        } = this.props


        return (
            <div>
       
              
                <ChangePasswordFields handleFormSubmit={this.handleFormSubmit} />
                {submitResponse.status === "error" &&
                submitResponse.message && (
                  <Alert color="danger" style={{marginTop: 20}}>{submitResponse.message}</Alert>
                )}
                <p><Link to="/login"> Go To login </Link></p>
            </div>
        );
    }
}

ChangePassword = connect(
    state => ({
        submitResponse: state.submitForm
      // pull initial values from account reducer
    }),
    { submitFormAction } // bind account loading action creator
  )(ChangePassword);


export default ChangePassword;