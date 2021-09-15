import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import "./index.scss";

import App from "./App";

ReactDom.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root"));