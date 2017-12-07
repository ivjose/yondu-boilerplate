import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import asyncComponent from "../AsyncComponent";

import AuthenticatedRoute from "../AuthenticatedRoute";
import DashboardLayout from "../../components/Layout/DashboardLayout";
const AsyncMainDashboard = asyncComponent(() => import("./MainDashboard"));
const AsyncUserProfile = asyncComponent(() => import("./UserProfile"));

class Dashboard extends Component {
  render() {
    return (
      <Switch>
        <DashboardLayout
          exact
          path="/dashboard"
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
