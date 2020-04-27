import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios"
import * as serviceWorker from './serviceWorker';
import{
    BrowserRouter as Router
} from"react-router-dom"

axios.interceptors.request.use(config=>{
    config.url = "/juooo"+config.url;
    return config;
})
axios.interceptors.response.use(({data})=>{
    return data;
})

React.Component.prototype.$axios = axios;
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
