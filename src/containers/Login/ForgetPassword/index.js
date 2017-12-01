import React, { Component } from 'react';
import { connect } from "react-redux";
import {  Link } from "react-router-dom";
import { Alert } from "reactstrap";
import { submitFormAction } from '../../../actions';

import ForgetPasswordFields from './components/ForgetPasswordFields';

class ForgetPassword extends Component {

    handleFormSubmit = values => {
        const { submitFormAction } = this.props;
        // console.log(values, "TEST");
        return submitFormAction("auth/forgot-password", values, "ForgetPasswordFieldsForm");
      };


    render() {


        const {
            submitResponse
        } = this.props


        return (
            <div>
       
              
                <ForgetPasswordFields handleFormSubmit={this.handleFormSubmit} />
                {
                    submitResponse.status === "success" &&  submitResponse.message ? <Alert color="success" style={{marginTop: 20}}>{submitResponse.message}</Alert> : submitResponse.status === "error" &&  submitResponse.message && <Alert color="danger" style={{marginTop: 20}}>{submitResponse.message}</Alert> 
                }

     

            
                <p><Link to="/login"> Go To login </Link></p>
            </div>
        );
    }
}

ForgetPassword = connect(
    state => ({
        submitResponse: state.submitForm
      // pull initial values from account reducer
    }),
    { submitFormAction } // bind account loading action creator
  )(ForgetPassword);

export default ForgetPassword;