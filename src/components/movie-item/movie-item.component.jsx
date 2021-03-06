import React from "react";
import "./movie-item.styles.scss";
import { formatDate, concatGenres } from "../../utils/formatter";
import PropTypes from "prop-types";
import { animateScroll } from "react-scroll";
import { replaceImgSrcWithFallback } from "../../utils/utils";
import { FALLBACK_IMG_SRC } from "../../utils/constants";
import MenuButton from "../menu-button/menu-button.component";
import { Link } from "react-router-dom";

const MovieItem = ({ movieData }) => {
    const { id, poster_path, title, release_date, genres } = movieData;
    const [isMenuButtonRendered, setMenuButtonRendered] = React.useState(false);

    const onMovieCardClick = () => {
        animateScroll.scrollToTop();
    };
    return (
        < div
            className="movie-wrapper"
            onMouseOver={() => setMenuButtonRendered(true)}>
            {isMenuButtonRendered && <MenuButton movieData={movieData} />}
            <div className="image-container">
                <Link to={`/movie=${id}`} style={{ textDecoration: 'none' }}>
                    <img
                        onClick={onMovieCardClick}
                        className="movie-image"
                        onError={replaceImgSrcWithFallback}
                        src={poster_path || FALLBACK_IMG_SRC}
                        alt={title} />
                </Link>
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
    )
};

MovieItem.propTypes = {
    id: PropTypes.string,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array
};

export default React.memo(MovieItem);