import initialState from "../initialState";
import { FILTER, SORT, SEARCH, GET_MOVIES } from "../../utils/constants";

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
        default: {
            return state;
        }
    }
};

export default rootReducer;