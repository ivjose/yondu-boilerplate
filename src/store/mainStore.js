
import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'


import logger from 'redux-logger'

import history from './mainHistory';

// import {ActionSaga} from '../actionSaga';
import rootSaga from "../sagas";

import reducers from '../reducers' // Or wherever you keep your reducers

// Saga Middleware
const sagaMiddleware = createSagaMiddleware()


// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)


let enhancers = null
if (process.env.NODE_ENV === 'production') {
  enhancers = compose(
    applyMiddleware( middleware, sagaMiddleware)
  );
} else {
  enhancers = compose(
    applyMiddleware(middleware, sagaMiddleware, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
}


// const action = type => store.dispatch({type})
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    reducers,
    enhancers
)
sagaMiddleware.run(rootSaga)

export default store;