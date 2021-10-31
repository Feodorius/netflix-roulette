import initialState from "../initialState";

import {
    ACTION_FILTER,
    ACTION_SORT,
    ACTION_SEARCH,
    ACTION_GET_MOVIES,
    ACTION_MANAGE_ADD_EDIT_DIALOG,
    ACTION_MANAGE_DELETE_DIALOG,
    ACTION_SELECT_MOVIE,
    ACTION_MANAGE_MESSAGE_BOX
} from "../../utils/constants";


const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_FILTER: {
            return { ...state, filterOption: payload };
        }
        case ACTION_SORT: {
            return { ...state, sortOption: payload };
        }
        case ACTION_SEARCH: {
            return { ...state, searchString: payload };
        }
        case ACTION_GET_MOVIES: {
            const { movies, totalMovies } = payload;
            return { ...state, movies, totalMovies };
        }
        case ACTION_SELECT_MOVIE: {
            return { ...state, selectedMovie: payload };
        }
        case ACTION_MANAGE_ADD_EDIT_DIALOG: {
            return { ...state, addEditDialog: payload };
        }
        case ACTION_MANAGE_DELETE_DIALOG: {
            return { ...state, deleteDialog: payload };
        }
        case ACTION_MANAGE_MESSAGE_BOX: {
            return { ...state, messageBox: payload };
        }
        default: {
            return state;
        }
    }
};

export default rootReducer;