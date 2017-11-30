import React, { Component } from 'react';
import {  Link } from "react-router-dom";
class ForgetPassword extends Component {
    render() {
        return (
            <div>
                ForgetPassword
                <p><Link to="/login"> Go To login </Link></p>
            </div>
        );
    }
}

export default ForgetPassword;