import React from "react";
import ReactDOM from "react-dom";
import App from "./app-common/components/app/app.component";
import {Provider} from "react-redux";
import store from "./app-common/store/index";

ReactDOM.hydrate(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root"));