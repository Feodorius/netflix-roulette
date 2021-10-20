import { getSearchQuery } from "../utils/api";
import { ACTION_GET_MOVIES } from "../utils/constants";

export const getMovies = () =>
    (dispatch, getState) => {
        const { sortOption, filterOption, searchString } = getState();
        const url = getSearchQuery(sortOption, filterOption, searchString);
        fetch(url)
            .then(response => response.json())
            .then(resp => dispatch(
                {
                    type: ACTION_GET_MOVIES,
                    payload: {
                        movies: resp.data,
                        totalMovies: resp.totalAmount
                    }
                }))
            .catch(error => {
                console.log(error)
            });
    };