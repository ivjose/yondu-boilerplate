import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import asyncComponent from "../AsyncComponent";
import DashboardLayout from "./components/DashboardLayout";
import Page404 from "../../components/Page404";

const AsyncLogin = asyncComponent(() => import("../Login"));
const AsyncDashboard = asyncComponent(() => import("../Dashboard"));

class GlobalErrorSwitch extends Component {
  state = {
    isOpen: false
  };
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;

    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.error)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  handleToggleSidebar = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  handleToggleSidebar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { location } = this.props;
    const isError = !!(
      location.state &&
      location.state.error &&
      this.previousLocation !== location
    ); // not initial render
    console.log(this.props, "TEST!!");

    return (
      <div style={{ height: "100%", background: "#eee" }}>
        {isError ? (
          <Route component={Page404} />
        ) : (
          <Switch location={isError ? this.previousLocation : location}>
            <DashboardLayout
              path="/dashboard"
              component={AsyncDashboard}
              isOpen={this.state.isOpen}
              handleToggleSidebar={this.handleToggleSidebar}
            />
            <DashboardLayout
              path="/user-management"
              component={AsyncDashboard}
              isOpen={this.state.isOpen}
              handleToggleSidebar={this.handleToggleSidebar}
            />
            <DashboardLayout
              path="/user-profile"
              component={AsyncDashboard}
              isOpen={this.state.isOpen}
              handleToggleSidebar={this.handleToggleSidebar}
            />
            <Route path="/" component={AsyncLogin} />
          </Switch>
        )}
      </div>
    );
  }
}

export default GlobalErrorSwitch;
