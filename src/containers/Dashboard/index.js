import React, { Component } from 'react';

import { Switch, Route, Redirect, Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div>
            <h2>Dashboard</h2>
            <p><Link to="/admin">Root</Link></p>
            <p><Link to="/admin/user">User</Link></p>
            <p><Link to="/admin/user/asdasd">UserTest</Link></p>
            <p><Link to="/">Frontend</Link></p>
            <p><Link to="/admin/the-route-is-swiggity-swoute">Swiggity swooty</Link></p>
            <Switch>
                <Route exact path='/Dashboard' component={Home} />
                <Route exact path='/UserProfile' component={About} />
                <Redirect to={{
                    state: { error: true }
                }} />
            </Switch>
            <footer>Bottom</footer>
        </div>
        );
    }
}

export default Dashboard;