import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { hot } from "react-hot-loader";

const WrappedApp = ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default process.env.NODE_ENV === "development"
  ? hot(module)(WrappedApp)
  : WrappedApp;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
