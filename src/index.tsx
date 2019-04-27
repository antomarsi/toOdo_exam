import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
