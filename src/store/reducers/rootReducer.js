import initialState from "../initialState";

import { FILTER, SORT, SEARCH, GET_MOVIES, MANAGE_ADD_EDIT_DIALOG, MANAGE_DELETE_DIALOG, SELECT_MOVIE } from "../../utils/constants";

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILTER: {
            return { ...state, filterOption: payload };
        }
        case SORT: {
            return { ...state, sortOption: payload };
        }
        case SEARCH: {
            return { ...state, searchString: payload };
        }
        case GET_MOVIES: {
            const { movies, totalMovies } = payload;
            return { ...state, movies, totalMovies };
        }
        case SELECT_MOVIE: {
            return { ...state, selectedMovie: payload };
        }
        case MANAGE_ADD_EDIT_DIALOG: {
            return { ...state, addEditDialog: payload };
        }
        case MANAGE_DELETE_DIALOG: {
            return { ...state, deleteDialog: payload };
        }
        default: {
            return state;
        }
    }
};

export default rootReducer;