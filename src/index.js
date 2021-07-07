import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import {configureStore,combineReducers}from '@reduxjs/toolkit'
import App from './App';
import reportWebVitals from './reportWebVitals';

//Reducers
import authReducer from './Controllers/Redux/authSlice'
import bugReducer from './controllers/Redux/bugSlice'
import userReducer from './Controllers/Redux/userSlice'

const reducer = combineReducer({
  auth:authReducer,
  bug:bugReducer,
  user:userReducer
})
//Redux configure
const store = configureStore({
  reducer
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
