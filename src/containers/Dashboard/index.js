import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import asyncComponent from "../AsyncComponent";

import AuthenticatedRoute from "../AuthenticatedRoute";
import DashboardLayout from "./components/DashboardLayout";
const AsyncMainDashboard = asyncComponent(() => import("./MainDashboard"));
const AsyncUserProfile = asyncComponent(() => import("./UserProfile"));

class Dashboard extends Component {
  state = {
    isOpen: false
  }


  handleToggleSidebar = () => {
    

    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {

    console.log("HELLO SIDEBAR!", this.state.isOpen);
    return (
      <Switch>
        <DashboardLayout
        
          exact
          path="/dashboard"
          isOpen={this.state.isOpen}
          handleToggleSidebar={this.handleToggleSidebar}
          component={AsyncMainDashboard}
        />
        <DashboardLayout
          exact
          path="/app/:userId"
          component={AsyncMainDashboard}
        />
        <DashboardLayout
          exact
          path="/user-profile"
          component={AsyncUserProfile}
        />
        <DashboardLayout
          exact
          path="/dashboard/user-profile"
          component={AsyncUserProfile}
        />
        <Redirect
          to={{
            state: { error: true }
          }}
        />
      </Switch>
    );
  }
}

export default Dashboard;
