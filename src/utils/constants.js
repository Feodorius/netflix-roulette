export const FILTER_GENRES = [
    "all",
    "documentary",
    "comedy",
    "horror",
    "crime"
];
export const genres = ["Crime", "Documentary", "Horror", "Comedy"];
export const MENU_BUTTON_OPTIONS = ['Edit', 'Delete'];

export const ACTION_FILTER = "FILTER";
export const ACTION_SORT = "SORT";
export const ACTION_SEARCH = "SEARCH";

export const ACTION_GET_MOVIES = "GET_MOVIES";
export const ACTION_SELECT_MOVIE = "SELECT_MOVIE";

export const ACTION_MANAGE_ADD_EDIT_DIALOG = "MANAGE_ADD_EDIT_DIALOG";
export const ACTION_MANAGE_DELETE_DIALOG = "MANAGE_DELETE_DIALOG";
export const ACTION_MANAGE_MESSAGE_BOX = "MANAGE_MESSAGE_BOX";

export const URL = "http://localhost:4000/movies";
export const RESPONSE_LIMIT = "?limit=20";

export const FALLBACK_IMG_SRC = `${window.location.origin}/images/image-not-found.png`;
export const DEFAULT_SEARCH_QUERY = { genre: 'all', sortBy: 'release_date'};