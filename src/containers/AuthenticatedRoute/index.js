import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const AuthenticatedRoute = ({ component: Component, layout: Layout, isLoggedIn, ...rest }) => (


        <Route
            {...rest}
            render={props => (isLoggedIn === true ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)}
        />

);

function mapStateToProps(state) {
    return {
      isLoggedIn: true,
    };
  }
  
  export default withRouter(connect(mapStateToProps, null)(AuthenticatedRoute));