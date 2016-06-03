import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';



ReactDOM.render(
  <Provider store={createStore(reducers , applyMiddleware(ReduxPromise))}>
    <App />
  </Provider>
  , document.querySelector('.container'));
