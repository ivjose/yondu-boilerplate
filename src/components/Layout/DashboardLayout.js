import React from 'react';

import { Route } from 'react-router-dom';

const DashboardLayout = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <div>

            <div>
                Sidebar
          </div>
            <div>
                <Component {...props} />
            </div>
        </div>
    )} />
)



export default DashboardLayout;