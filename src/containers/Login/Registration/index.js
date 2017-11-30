import React, { Component } from 'react';
import {  Link } from "react-router-dom";
class Registration extends Component {
    render() {
        return (
            <div>
                Registration
                <p><Link to="/login"> Go To login </Link></p>
            </div>
        );
    }
}

export default Registration;