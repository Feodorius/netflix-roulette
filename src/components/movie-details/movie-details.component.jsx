import React from "react";
import "./movie-details.styles.scss";

import Logo from "../../components/logo/logo.component";
import "../../components/logo/logo.styles.scss";
import SearchIcon from '@material-ui/icons/Search';
import { formatDate, formatRuntime } from "../../utils/formatter";
import { FALLBACK_IMG_SRC } from "../../utils/constants";
import { replaceImgSrcWithFallback } from "../../utils/utils";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
    let movieId = useParams();

    const
        poster_path = "",
        title = "Title",
        vote_average = 8.7,
        genres = [],
        release_date = "2020-12-12",
        runtime = 120,
        overview = "overview";
    return (
        <div className="details-container">
            <Logo />
            <Link to={`/search`}>
                <SearchIcon
                    className="search-icon"
                    color="primary"
                    fontSize="large" />
            </Link>
            <img
                className="movie-poster"
                onError={replaceImgSrcWithFallback}
                src={poster_path || FALLBACK_IMG_SRC}
                alt={title} />
            <div className="movie-info">
                <div className="first-line-info">
                    <h2 className="movie-title">{title}</h2>
                    <div className="rating-circle">
                        <span className="rating-circle-value">{vote_average}</span>
                    </div>
                    <h3 className="movie-genres">{
                        genres.join(" & ")
                    }</h3>
                </div>
                <div className="second-line-info">
                    <span className="movie-year">{formatDate(release_date)}</span>
                    <span>{formatRuntime(runtime)}</span>
                </div>
                <div className="movie-description">
                    {overview}
                </div>
            </div>
        </div >
    );
};

export default MovieDetails;