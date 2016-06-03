import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from '../componen/app'
import reducers from './reducer'
import ReduxPromise from 'redux-promise'
import {Router,broweserHistory} from 'react-router';

import reducer from './reducer';
import routes   from './route';
import promise  from 'promise-redux';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));

