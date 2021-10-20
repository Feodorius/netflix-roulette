import React from "react";
import "./header.styles.scss";

import Search from "../../components/search/search.component";
import MovieDetails from "../../components/movie-details/movie-details.component";
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