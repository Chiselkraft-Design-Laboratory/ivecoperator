import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "serviceWorker";
import ThemeService from "services/ThemeService";
import IvecOperatorApp from "App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <ThemeService>
    <Router>
      <IvecOperatorApp />
    </Router>
  </ThemeService>,
  document.getElementById("root")
);
serviceWorker.unregister();
