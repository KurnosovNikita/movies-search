import React from "react";
import ReactDOM from "react-dom";
import App from "./app-common/components/app/app.component";
import {Provider} from "react-redux";
import store from "./app-common/store/index";
import {persistor} from "./app-common/store/store";
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App/>
      </PersistGate>
  </Provider>,
  document.getElementById("root"));