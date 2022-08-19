
// import React from "react";
// import ReactDOM from "react-dom";

// document.addEventListener('DOMContentLoaded', () =>{
//     const root = document.getElementById('root');
    
//     let store
//     ReactDOM.render(<h1>Welcome to EatingEasy</h1>, root);
// });

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import { RECEIVE_SESSION_ERRORS, receiveSessionErrors } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
