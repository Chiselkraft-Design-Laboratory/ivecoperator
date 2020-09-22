import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "serviceWorker";
import IvecOperatorApp from "App";

ReactDOM.render(<IvecOperatorApp />, document.getElementById("root"));
serviceWorker.unregister();
