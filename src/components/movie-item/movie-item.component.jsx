import React from "react";
import "./movie-item.styles.scss";
import { formatDate, concatGenres } from "../../utils/formatter";
import PropTypes from "prop-types";


const MovieItem = ({ poster_path, title, release_date, genres }) => (
    <div className="movie-wrapper">
        <div className="image-container">
            <img className="movie-image" src={poster_path} alt={title} />
        </div>
        <div className="name-and-year">
            <span className="movie-name">{title}</span>
            <span className="movie-year-wrapper">
                <span className="movie-year">
                    {formatDate(release_date)}
                </span>
            </span>
        </div>
        <span className="movie-genres">{concatGenres(genres)}</span>
    </div>
);

MovieItem.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array
};

export default MovieItem;