import React from "react";

import "./App.scss";

import Header from "./containers/header/header.container";
import Footer from "./containers/footer/footer.container";
import Body from "./containers/body/body.container";

const App = () => (
    <div className="main-container">

        <Header />
        <Body />
        <Footer />

    </div>
);


export default App;