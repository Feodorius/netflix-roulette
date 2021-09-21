import React from "react";
import "./movies.styles.scss";

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


export default Movies;