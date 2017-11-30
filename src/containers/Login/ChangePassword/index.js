import React, { Component } from 'react';
import {  Link } from "react-router-dom";
class ChangePassword extends Component {
  render() {
    return (
      <div>
        Change Password
        <p><Link to="/login"> Go To login </Link></p>
      </div>
    );
  }
}

export default ChangePassword;