import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

// import { render } from 'react-snapshot';

import store from './store/mainStore'

// import { Route } from 'react-router-dom'

// import './index.css';
import App from './App';
import history from './store/mainHistory';

import registerServiceWorker from './registerServiceWorker';





ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */}
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
