import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import asyncComponent from "../AsyncComponent";

import ModuleRoutes from "./ModuleRoutes";

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
      {ModuleRoutes.map(
        (route, index) => {
          if (route.access === true && route.subRoute) {
              return route.subRoute.map(
                (subRoute, subIndex) => {
        
                  if (subRoute.access === true) {
                    console.log("SUBROUTE", subRoute, subIndex);
                    return (
                      <Route key={subIndex} {...subRoute} path={`${route.path}/${subRoute.path}`} />
                    );
                  } else {
                    return null;
                  }
                }
              ) 
            
        
          } else if (route.access === true) {
            return (
              <Route key={index} {...route}/>
            );

          } else {
            return null;
          }
        }
      )}

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
