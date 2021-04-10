import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
require("bootstrap/dist/css/bootstrap.css");
import "./components/styles.scss";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Nunito:wght@400;700&display=swap"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
