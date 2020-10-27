import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "serviceWorker";

import ThemeService from "services/ThemeService";
import IvecOperatorApp from "App";
import { store } from "./stores";

ReactDOM.render(
  <ThemeService>
    <Router>
      <Provider store={store}>
        <IvecOperatorApp />
      </Provider>
    </Router>
  </ThemeService>
  ,
  document.getElementById("root")
);
serviceWorker.unregister();
