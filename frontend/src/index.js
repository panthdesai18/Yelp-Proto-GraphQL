import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
// import {createStore, applyMiddleware, compose} from 'redux';
// import promise from 'redux-promise';
import store from '../src/js/store/index'


ReactDOM.render(
  <Provider store = {store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

