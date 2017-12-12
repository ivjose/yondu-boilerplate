import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'

import { requestApiData } from '../../../actions'

import Api from "../../../utils/Api";

class MainDashboard extends Component {
    componentDidMount() {
        // Api.Get()
        // this.props.requestApiData('api/')
    }




    render() {




        const {results = []} = this.props.getData

        return (
            <div>
             
                   <h1>
                   MainDashboard Test  MainDashboard Test MainDashboard Test MainDashboard Test MainDashboard Test  MainDashboard Test MainDashboard Test MainDashboard TestMainDashboard Test  MainDashboard Test MainDashboard Test MainDashboard TestMainDashboard Test  MainDashboard Test MainDashboard Test MainDashboard Test
                </h1>
            </div>
        );
    }
}


MainDashboard = connect(
    state => ({
        getData: state.getData,
    }),
    {
        requestApiData
    }               // bind account loading action creator
)(MainDashboard)



export default MainDashboard;