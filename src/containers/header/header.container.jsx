import React from "react";
import "./header.styles.scss";

import Search from "../../components/search/search.component";
import MovieDetails from "../../components/movie-details/movie-details.component";
import { Context } from "../../App";
import { Switch, Route, Redirect } from "react-router";

const Header = () => {
    const context = React.useContext(Context);
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Redirect from="/" to="/search" />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/movie/id">
                    <MovieDetails />
                </Route>
            </Switch>
        </>
    )
};

export default Header;