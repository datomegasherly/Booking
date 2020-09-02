import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReduce from './reduce/index';
import App from './app';

const store = createStore(mainReduce);

render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('app'));