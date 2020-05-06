import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios"
import * as serviceWorker from './serviceWorker';
import{
    BrowserRouter as Router
} from"react-router-dom"
import {
    Provider
} from 'react-redux'
import store from "./store";

axios.interceptors.request.use(config=>{
    config.url = "/api"+config.url;
    return config;
})
axios.interceptors.response.use(({data})=>{
    return data;
})

React.Component.prototype.$axios = axios;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
