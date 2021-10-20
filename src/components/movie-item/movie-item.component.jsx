import React from "react";
import "./movie-item.styles.scss";
import { formatDate, concatGenres } from "../../utils/formatter";
import PropTypes from "prop-types";
import { animateScroll } from "react-scroll";
import { replaceImgSrcWithFallback } from "../../utils/utils";
import { FALLBACK_IMG_SRC } from "../../utils/constants";
import MenuButton from "../menu-button/menu-button.component";
import { Context } from "../../App";
import { Link } from "react-router-dom";

const MovieItem = ({ movieData }) => {
    const { id, poster_path, title, release_date, genres } = movieData;
    const [isMenuButtonRendered, setMenuButtonRendered] = React.useState(false);
    // const context = React.useContext(Context);

    const onMovieCardClick = (e) => {
        if (e.target.className === "movie-image") {
            // context.openMovieDetails(movieData);
            animateScroll.scrollToTop();
        }
    };

    return (
        <Link to={`/movie/${id}`}>
            < div
                className="movie-wrapper"
                onMouseOver={() => setMenuButtonRendered(true)}
                onClick={onMovieCardClick}>
                {isMenuButtonRendered && <MenuButton movieData={movieData} />}
                <div className="image-container">
                    <img
                        className="movie-image"
                        onError={replaceImgSrcWithFallback}
                        src={poster_path || FALLBACK_IMG_SRC}
                        alt={title} />
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
            </div >
        </Link>
    )
};

MovieItem.propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array
};

export default MovieItem;