import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./reducers";
import "todomvc-app-css/index.css";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

console.log("SORT : ", store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
