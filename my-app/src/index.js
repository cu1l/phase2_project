import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import "semantic-ui-form"
import "./index.css";

ReactDOM.render(
<Router>
    <App />
</Router>, document.getElementById("root"));