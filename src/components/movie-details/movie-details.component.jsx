import React, { useEffect, useState } from "react";
import "./movie-details.styles.scss";

import Logo from "../../components/logo/logo.component";
import "../../components/logo/logo.styles.scss";
import SearchIcon from '@material-ui/icons/Search';
import { formatDate, formatRuntime } from "../../utils/formatter";
import { FALLBACK_IMG_SRC } from "../../utils/constants";
import { replaceImgSrcWithFallback } from "../../utils/utils";
import { Link, useParams } from "react-router-dom";
import { getModieData } from "../../utils/api";

const MovieDetails = () => {
    let { id } = useParams();
    const [isMovieFound, setMovieFound] = useState(false);
    const [state, setState] = useState({
        poster_path: "",
        title: "",
        vote_average: 0,
        genres: [],
        release_date: 0,
        runtime: 0,
        overview: ""
    });
    useEffect(() =>
        getModieData(id).then(resp => {
            if (resp.ok) {
                setMovieFound(true);
                return resp.json()
                    .then(resp => setState(resp));
            } else {
                setMovieFound(false);
            }
        }), [id]);

    return (
        <div className="details-container">
            <Logo />
            <Link to={`/search`}>
                <SearchIcon
                    className="search-icon"
                    color="primary"
                    fontSize="large" />
            </Link>
            {!isMovieFound &&
                <div className="notfound">
                    <h2>MOVIE NOT FOUND</h2>
                </div>}
            {isMovieFound &&
                <div className="info-container">
                    <img
                        className="movie-poster"
                        onError={replaceImgSrcWithFallback}
                        src={state.poster_path || FALLBACK_IMG_SRC}
                        alt={state.title} />
                    <div className="movie-info">
                        <div className="first-line-info">
                            <h2 className="movie-title">{state.title}</h2>
                            <div className="rating-circle">
                                <span className="rating-circle-value">{state.vote_average}</span>
                            </div>
                            <h3 className="movie-genres">{
                                state.genres.join(" & ")
                            }</h3>
                        </div>
                        <div className="second-line-info">
                            <span className="movie-year">{formatDate(state.release_date)}</span>
                            <span>{formatRuntime(state.runtime)}</span>
                        </div>
                        <div className="movie-description">
                            {state.overview}
                        </div>
                    </div>
                </div>}
        </div >
    );
};

export default MovieDetails;