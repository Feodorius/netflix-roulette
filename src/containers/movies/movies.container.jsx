import React from "react";
import "./movies.styles.scss";
import PropTypes from "prop-types";

import MovieItem from "../../components/movie-item/movie-item.component";
import { useSelector } from "react-redux";


const Movies = () => {
    const movies = useSelector(state => state.movies);
    const totalMovies = useSelector(state => state.totalMovies);
    return (
        <>
            <div className="total-movies">
                <span className="total-value">{totalMovies}</span> movies found
            </div>
            <div className="movies-container">
                {
                    movies.map(props => (
                        <MovieItem key={props.id} movieData={props} />
                    ))
                }
            </div>
        </>
    )
}
    ;

Movies.propTypes = {
    movies: PropTypes.array
};


export default Movies;