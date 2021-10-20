import initialState from "../initialState";
import { ACTION_FILTER, ACTION_SORT, ACTION_SEARCH, ACTION_GET_MOVIES } from "../../utils/constants";

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
        default: {
            return state;
        }
    }
};

export default rootReducer;