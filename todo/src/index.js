import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { reducer } from './reducers';

import App from './App';

// Creating redux store
const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
    // Provider wraps application to allow store to be distributed throughout UI of app
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);