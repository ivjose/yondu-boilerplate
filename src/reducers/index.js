import { combineReducers } from 'redux';

// import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'


import getData from "./getData";

const reducers = combineReducers({
    getData,
    router: routerReducer,
    form: formReducer,

});

export default reducers;