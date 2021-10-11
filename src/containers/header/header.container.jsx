import React from "react";
import "./header.styles.scss";

import Search from "../../components/search/search.component";
import MovieDetails from "../../components/movie-details/movie-details.component";
// const MovieDetails = React.lazy(() => import("../../components/movie-details/movie-details.component"));
// const Search = React.lazy(() => import("../../components/search/search.component"));
import { Context } from "../../App";

const Header = () => {
    const context = React.useContext(Context);
    return (
        <>
            {
                context.isSearchOpened ? <Search /> : <MovieDetails />
            }
        </>
    )
};

export default Header;