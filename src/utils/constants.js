export const FILTER_GENRES = [
    "All",
    "Documentary",
    "Comedy",
    "Horror",
    "Crime"
];
export const genres = ["Crime", "Documentary", "Horror", "Comedy"];

export const ACTION_FILTER = "ACTION_FILTER";
export const ACTION_SORT = "ACTION_SORT";
export const ACTION_SEARCH = "ACTION_SEARCH";

export const ACTION_ADD_MOVIE = "ACTION_ADD_MOVIE";
export const ACTION_GET_MOVIES = "ACTION_GET_MOVIES";
export const ACTION_EDIT_MOVIE = "ACTION_EDIT_MOVIE";
export const ACTION_DELETE_MOVIE = "ACTION_DELETE_MOVIE";

export const URL = "http://localhost:4000/movies?limit=20";
export const FALLBACK_IMG_SRC = `${window.location.origin}/images/image-not-found.png`;