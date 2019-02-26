// frontend/bench_bnb.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { logout, signup} from "./util/session_api_util";
import {login} from './actions/session_actions';
import configureStore from './store/store';
import Root from '../frontend/components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, root);
    
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signup = signup;
    window.logout = logout;
    
});