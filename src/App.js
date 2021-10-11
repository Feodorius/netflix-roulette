import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
import muiTheme from "./utils/mui-theme";
import "./App.scss";

import Header from "./containers/header/header.container";
import Footer from "./containers/footer/footer.container";
import Body from "./containers/body/body.container";
import getMovieData from "../public/mockData";
import { useMovieDetails } from "./utils/hooks";

export const Context = React.createContext();

const App = () => {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        getMovieData().
            then(data => setMovies(data));
    }, []);

    return (
        <div className="main-container">
            <ThemeProvider theme={muiTheme}>
                <Context.Provider value={useMovieDetails()}>
                    <Header />
                    <Body movies={movies} />
                </Context.Provider>
                <Footer />
            </ThemeProvider>
        </div>
    )
};


export default App;