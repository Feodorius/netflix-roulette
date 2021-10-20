import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import muiTheme from "./utils/mui-theme";
import "./App.scss";

import Header from "./containers/header/header.container";
import Footer from "./containers/footer/footer.container";
import Body from "./containers/body/body.container";
import Dialogs from "./containers/dialogs/dialogs.container";

import { useMovieDetails } from "./utils/hooks";
import { useDispatch } from "react-redux";
import { getMovies } from "./store/thunks"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Search from "./components/search/search.component";
import MovieDetails from "./components/movie-details/movie-details.component";

export const Context = React.createContext();

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div className="main-container">
            <Router>
                <ThemeProvider theme={muiTheme}>
                    {/* <Context.Provider value={useMovieDetails()}> */}
                        <Dialogs />
                        <Header />
                        <Body />
                    {/* </Context.Provider> */}
                    <Footer />
                </ThemeProvider>
            </Router>
        </div>
    )
};


export default App;