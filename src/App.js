import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import muiTheme from "./utils/mui-theme";
import "./App.scss";

import Header from "./containers/header/header.container";
import Footer from "./containers/footer/footer.container";
import Body from "./containers/body/body.container";

const App = () => (
    <div className="main-container">
        <ThemeProvider theme={muiTheme}>
            <Header />
            <Body />
            <Footer />
        </ThemeProvider>
    </div>
);


export default App;