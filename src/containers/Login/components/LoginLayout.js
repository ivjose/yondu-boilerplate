import React from "react";

import { Route } from "react-router-dom";


import { Grid } from "semantic-ui-react";

const LoginLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
   
        <Grid style={{marginTop: 0}}>
          <Grid.Row>
            <Grid.Column computer={10} mobile={16}>
              <h1 className="text-center">Login Layout</h1>
            </Grid.Column>
            <Grid.Column computer={5} mobile={16}>
   
              <Component {...props} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
     
    )}
  />
);

export default LoginLayout;
