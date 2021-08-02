import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Routes from "./routes";
import { Provider } from "react-redux";
import { accountStore } from "./redux/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={accountStore}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
