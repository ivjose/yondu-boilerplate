import React from "react";

import { Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const LoginLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Container>
        <Row>
          <Col md="12" >
          <h1 className="text-center">Login Layout</h1>
          </Col>
          <Col md={{ size: 4, offset: 4 }}> <Component {...props} /></Col>

         
        </Row>
      </Container>
    )}
  />
);

export default LoginLayout;
