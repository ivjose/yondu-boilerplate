import React from 'react';

import { Route } from 'react-router-dom';

const LoginLayout = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <div>
            <div>
                Login Layout
       </div>
            <div>
                <Component {...props} />
            </div>
        </div>
    )} />
)



export default LoginLayout;