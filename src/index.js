import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "serviceWorker";
import ThemeService from "services/ThemeService";
import IvecOperatorApp from "App";

ReactDOM.render(
  <ThemeService>
    <IvecOperatorApp />
  </ThemeService>,
  document.getElementById("root")
);
serviceWorker.unregister();
