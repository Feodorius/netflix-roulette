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

export const Context = React.createContext();

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div className="main-container">
            <ThemeProvider theme={muiTheme}>
                <Context.Provider value={useMovieDetails()}>
                    <Dialogs />
                    <Header />
                    <Body />
                </Context.Provider>
                <Footer />
            </ThemeProvider>
        </div>
    )
};


export default App;