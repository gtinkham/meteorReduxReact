import React from 'react';
import './app.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "/client/reducers";
import App from '/client/components/app';


const store = createStore(rootReducer);


render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);