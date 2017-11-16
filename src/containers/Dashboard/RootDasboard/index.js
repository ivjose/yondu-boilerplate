import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import asyncComponent from '../../AsyncComponent';

import AuthenticatedRoute from '../../AuthenticatedRoute';
import DashboardLayout from '../../../components/Layout/DashboardLayout'
const AsyncMainDashboard = asyncComponent(() => import('../MainDashboard'));
const AsyncUserProfile = asyncComponent(() => import('../UserProfile'));



class RootDashboard extends Component {
    render() {
        return (
            <div>
            <h2>Dashboard</h2>
            <p><Link to="/login">Login</Link></p>
            <p><Link to="/dashboard">Dashboard</Link></p>
            <p><Link to='/app/test' >Test Route</Link></p>
            <p><Link to="/user-profile">User Profile </Link></p>
            <p><Link to="/the-route-is-swiggity-swoute">Swiggity swooty</Link></p>
            <Switch>
                <AuthenticatedRoute exact path='/dashboard' component={AsyncMainDashboard} />
                <AuthenticatedRoute exact path='/app/:userId' component={AsyncMainDashboard} />
                <AuthenticatedRoute exact path='/user-profile' component={AsyncUserProfile} />
                <AuthenticatedRoute exact path='/dashboard/user-profile' component={AsyncUserProfile} />
                <Redirect to={{
                    state: { error: true }
                }} />
            </Switch>
            <footer>Bottom</footer>
        </div>
        );
    }
}

export default RootDashboard;