import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";

import UserLogin from "./UserLogin";
import ForgetPassword from "./ForgetPassword";
import Registration from "./Registration";
import ChangePassword from "./ChangePassword";
import LayoutLogin from "../../components/Layout/LoginLayout";

class Login extends Component {
  componentDidMount() {
    console.log("Hello world", this.props);
  }

  render() {
    const { location } = this.props;

    return (
      <Switch>
        <LayoutLogin exact path="/login" component={UserLogin} />
        <LayoutLogin exact path="/forget-password" component={ForgetPassword} />
        <LayoutLogin exact path="/register" component={Registration} />
        <LayoutLogin exact path="/change-password" component={ChangePassword} />
        {location.pathname === "/" ? (
          <Redirect to="/login" from="/" />
        ) : (
          <Redirect
            to={{
              state: { error: true }
            }}
          />
        )}
      </Switch>
    );
  }
}

export default Login;
