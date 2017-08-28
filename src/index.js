import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import reducer from './reducer.js'
import initialState from './initialState.js'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import './semantic/dist/semantic.min.css';

const store = createStore(reducer, initialState, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
