import React from "react";

export const useMovieDetails = () => {
    const [isSearchOpened, setSearchOpened] = React.useState(true);
    const [selectedMovie, setSelectedMovie] = React.useState({});

    const openMovieDetails = (movieData) => {
        setSearchOpened(false);
        setSelectedMovie(movieData);
    };

    const closeMovieDetails = () => {
        setSearchOpened(true);
        setSelectedMovie({});
    };


    return { isSearchOpened, selectedMovie, openMovieDetails, closeMovieDetails, };
};