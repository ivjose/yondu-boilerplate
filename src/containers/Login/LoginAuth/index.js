import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import UserLogin from '../UserLogin';
import ForgetPassword from '../ForgetPassword';
import Registration from '../Registration';

// import LayoutLogin from '../../../components/Layout/LoginLayout';




class LoginAuth extends Component {

    componentDidMount() {
        console.log("Hello world",this.props);
       
    }

    render() {
        const {
            location
        } = this.props


        return (
            <div>
            <h2>Login</h2>
            <p><Link to="/">Root</Link></p>
            <p><Link to="/login">Login</Link></p>
            <p><Link to="/register">Register</Link></p>
            <p><Link to="/forget-password">Forget</Link></p>
            <p><Link to="/dashboard"> Go To dashboard </Link></p>
            <p><Link to="/the-route-is-swiggity-swoute">Swiggity swooty</Link></p>
            <Switch>
               
                <Route exact  path='/login' component={UserLogin} />
                <Route exact  path='/forget-password' component={ForgetPassword} />
                <Route exact  path='/register' component={Registration} />


                
            {
                location.pathname === '/' ? <Redirect to='/login' from='/' /> : <Redirect to={{
                    state: { error: true },
                }} />
            }
                
            </Switch>
            <footer>Bottom</footer>
        </div>
        );
    }
}




export default LoginAuth;