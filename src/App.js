import React, { Component } from 'react';



import { Route } from 'react-router-dom'

// import asyncComponent from "./components/AsyncComponent";

import GlobalErrorSwitch from "./containers/GlobalErrorSwitch";
// import { render } from 'react-snapshot'; 
// import About from './containers/About';
// import Topics from './containers/Topics';

// const AsyncAbout = asyncComponent(() => import("./containers/About"));
// const AsyncTopics = asyncComponent(() => import("./containers/Topics"));

class App extends Component {
  render() {
    return  <Route component={GlobalErrorSwitch} />
  }
}

export default App;
