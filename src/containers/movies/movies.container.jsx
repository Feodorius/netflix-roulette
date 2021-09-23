import React from "react";
import "./movies.styles.scss";
import PropTypes from "prop-types";

import MovieItem from "../../components/movie-item/movie-item.component";

const Movies = ({ movies }) => (
    <>
        <div className="total-movies">
            <span className="total-value">{movies.length}</span> movies found</div>
        <div className="movies-container">
            {
                movies.map(({ id, ...otheProps }) => (
                    <MovieItem key={id} {...otheProps} />
                ))
            }
        </div>
    </>
);

Movies.propTypes = {
    movies: PropTypes.array
};


export default Movies;