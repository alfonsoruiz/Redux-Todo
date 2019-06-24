import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducers';

import App from './App'

// Creating redux store
const store = createStore(reducer);

ReactDOM.render(
    // Provider wraps application to allow store to be distributed throughout UI of app
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);