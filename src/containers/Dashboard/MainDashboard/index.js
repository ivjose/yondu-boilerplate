import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'

import { requestApiData } from '../../../actions'

import Api from "../../../utils/Api";

class MainDashboard extends Component {
    componentDidMount() {
        // Api.Get()
        this.props.requestApiData('api/')
    }


    render() {


        const person = (x, i) => (
            <div key={x.id.value}>
            <h1>{x.gender}</h1>
            <h1>{x.name.first}</h1>
            <h1>{x.name.last}</h1>
            <img src={x.picture.medium} alt=""/>
            </div>
        )

        const {results = []} = this.props.getData

        return (
            <div>
                MainDashboard
                   <h1>
                    {results.map(person)}
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