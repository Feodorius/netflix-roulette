import React from "react";
import "./header.styles.scss";

import Search from "../../components/search/search.component";
import MovieDetails from "../../components/movie-details/movie-details.component";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

const Header = () => {
    let { path } = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={path} exact>
                    <Redirect from={path} to="/search" />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/movie/:id">
                    <MovieDetails />
                </Route>             
            </Switch>
        </>
    )
};

export default Header;