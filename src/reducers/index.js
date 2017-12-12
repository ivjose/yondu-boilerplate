import { combineReducers } from 'redux';

// import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import  submitFormReducer  from './submitFormReducer'


import userLoginReducer from '../containers/Login/UserLogin/userLoginReducer'

import getData from "./getData";

const reducers = combineReducers({
    getData,
    submitForm: submitFormReducer,
    userLogin: userLoginReducer,
    router: routerReducer,
    form: formReducer,

});

export default reducers;