import { getUrl } from "../utils/api";
import { GET_MOVIES } from "../utils/constants";

export const getMovies = () =>
    (dispatch, getState) => {
        const { sortOption, filterOption, searchString } = getState();
        const url = getUrl(sortOption, filterOption, searchString);
        fetch(url)
            .then(response => response.json())
            .then(resp => dispatch(
                {
                    type: GET_MOVIES,
                    payload: {
                        movies: resp.data,
                        totalMovies: resp.totalAmount
                    }
                }))
            .catch(error => {
                console.log(error)
            });
    };