import React, { useEffect } from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import muiTheme from "./utils/mui-theme";
import "./App.scss";

import Footer from "./containers/footer/footer.container";
import Body from "./containers/body/body.container";
import Dialogs from "./containers/dialogs/dialogs.container";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NotFound from "./containers/404/404.container";
import Search from "./components/search/search.component";
import MovieDetails from "./components/movie-details/movie-details.component";
import queryString from "query-string";
import { DEFAULT_SEARCH_QUERY } from "./utils/constants";
import { useDispatch } from "react-redux";
import { getMovies } from "./store/thunks";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div className="main-container">
            <Router>
                <ThemeProvider theme={muiTheme}>
                    <Dialogs />
                    <Switch>
                        <Route path="/" exact>
                            <Redirect from="/" to={{
                                pathname: "/search",
                                search: `?${queryString.stringify(DEFAULT_SEARCH_QUERY)}`
                            }} />
                        </Route>
                        <Route path="/search/:searchQuery?">
                            <Search />
                            <Body />
                        </Route>
                        <Route path="/movie=:id" exact>
                            <MovieDetails />
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