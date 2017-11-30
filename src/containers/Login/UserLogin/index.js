import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  Link } from "react-router-dom";

import { userLogin } from './actions';

import LoginFields from './components/LoginFields';

class UserLogin extends Component {

    handleFormSubmit = values => {
        const {
            userLogin
        } = this.props
        // console.log(values, "TEST");
        return userLogin("auth/login",values, 'LoginFieldsForm')
      };

    render() {
        return (
            <div>
            <LoginFields  handleFormSubmit={this.handleFormSubmit} />
            <p><Link to="/register">Register</Link></p>
            <p><Link to="/forget-password">Forget Password</Link></p>
            
            <p><Link to="/change-password">Change Password</Link></p>
            <p><Link to="/dashboard"> Go To dashboard </Link></p>
         


            </div>
        );
    }
}


UserLogin = connect(
    state => ({
 
        userLoginStatus: state.userLogin,
        // pull initial values from account reducer
    }),
    { userLogin }            // bind account loading action creator
)(UserLogin)

export default UserLogin;