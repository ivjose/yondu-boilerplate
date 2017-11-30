import React, { Component } from 'react';
import {  Link } from "react-router-dom";
class UserLogin extends Component {
    render() {
        return (
            <div>
            <h2>Login</h2>
            <p><Link to="/">Root</Link></p>
            <p><Link to="/register">Register</Link></p>
            <p><Link to="/forget-password">Forget Password</Link></p>
            
            <p><Link to="/change-password">Change Password</Link></p>
            <p><Link to="/dashboard"> Go To dashboard </Link></p>
            user login
            </div>
        );
    }
}

export default UserLogin;