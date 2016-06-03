import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// redux devtools middleware
import todoApp from './reducers/todoApp';
import TodoApp from './components/TodoApp/TodoApp';
import thunk from 'redux-thunk'

require('../styles/common.scss');

ReactDOM.render(
  <Provider store={createStore(todoApp ,applyMiddleware(thunk))}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
