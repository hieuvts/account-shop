import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Routes from "./routes";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <PersistGate
      loading={null}
      persistor={persistor}
    >
      <Provider store={store}>
        <Routes />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);
