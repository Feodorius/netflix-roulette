import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import muiTheme from "./utils/mui-theme";
import "./App.scss";

import Header from "./containers/header/header.container";
import Footer from "./containers/footer/footer.container";
import Body from "./containers/body/body.container";
import Dialogs from "./containers/dialogs/dialogs.container";

import { useDispatch } from "react-redux";
import { getMovies } from "./store/thunks"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./containers/404/404.container";

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div className="main-container">
            <Router>
                <ThemeProvider theme={muiTheme}>
                    <Dialogs />
                    <Switch>
                        <Route path="/">
                            <Header />
                            <Body />
                        </Route>
                        <Route path="*" component={NotFound} />
                    </Switch>
                    <Footer />
                </ThemeProvider>
            </Router>
        </div>
    )
};


export default App;