import React from 'react';
import ReactDOM from 'react-dom';

import { reducer } from './reducers/reducer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

import './index.css';

//const store = createStore(reducer);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

