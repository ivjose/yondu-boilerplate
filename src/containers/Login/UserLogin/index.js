import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { userLoginAction } from "./userLoginAction";

import LoginFields from "./components/LoginFields";
import { Alert } from "reactstrap";

class UserLogin extends Component {



    componentWillReceiveProps(newProps) {

        const { userLoginStatus } = this.props;
    
        if(newProps.userLoginStatus.status === "success") {
            console.log("success!!!",userLoginStatus);
            // browserHistory.push('/application-maintenance');
        }
    }

  handleFormSubmit = values => {
    const { userLoginAction } = this.props;
    // console.log(values, "TEST");
    return userLoginAction("auth/login", values, "LoginFieldsForm");
  };

  render() {
    userLoginStatus;
    const { userLoginStatus } = this.props;

    return (
      <div>
        <LoginFields handleFormSubmit={this.handleFormSubmit} />
        {userLoginStatus.status === "error" &&
          userLoginStatus.message && (
            <Alert color="danger" style={{ marginTop: 20 }}>
              {userLoginStatus.message}
            </Alert>
          )}
        <p>
          <Link to="/register">Register</Link>
        </p>
        <p>
          <Link to="/forget-password">Forget Password</Link>
        </p>

        <p>
          <Link to="/change-password">Change Password</Link>
        </p>
        <p>
          <Link to="/dashboard"> Go To dashboard </Link>
        </p>
      </div>
    );
  }
}

UserLogin = connect(
  state => ({
    userLoginStatus: state.userLogin
    // pull initial values from account reducer
  }),
  { userLoginAction } // bind account loading action creator
)(UserLogin);

export default UserLogin;
