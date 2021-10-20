import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store/reducers/rootReducer";

import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDom.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
    document.getElementById("root"));