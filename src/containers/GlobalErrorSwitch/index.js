import React, { Component } from 'react';

import { Switch, Route} from 'react-router-dom';

import asyncComponent from "../AsyncComponent";
import AuthenticatedRoute from '../AuthenticatedRoute';
import Page404 from "../../components/Page404"



const AsyncLogin = asyncComponent(() => import("../Login"));
const AsyncDashboard = asyncComponent(() => import("../Dashboard"));

class GlobalErrorSwitch extends Component {
    previousLocation = this.props.location

    componentWillUpdate(nextProps) {
        const { location } = this.props;

        if (nextProps.history.action !== 'POP'
            && (!location.state || !location.state.error)) {
            this.previousLocation = this.props.location
        };
    }

    handleToggleSidebar = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }





    render() {
        const { location } = this.props;
        const isError = !!(
            location.state &&
            location.state.error &&
            this.previousLocation !== location // not initial render
        )
        console.log(this.props, "TEST!!");

        return (
            <div style={{height: '100%', background: "#eee"}}>
                {
                    isError
                        ? <Route component={Page404} />
                        : <Switch location={isError ? this.previousLocation : location}>
                            <AuthenticatedRoute path="/dashboard" handleToggleSidebar="test" component={AsyncDashboard} />
                            <AuthenticatedRoute path='/app' component={AsyncDashboard} />
                            <Route path="/" component={AsyncLogin} />


                            
                        </Switch>}
            </div>
        )
    }
}



export default GlobalErrorSwitch;