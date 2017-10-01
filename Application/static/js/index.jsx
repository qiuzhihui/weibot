// index.jsx
import React from "react";
import { render } from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from "./App";



let store = createStore(todoApp)

render(
    <App />,
    document.getElementById("content")
);