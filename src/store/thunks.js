import { getSearchQuery } from "../utils/api";
import { ACTION_GET_MOVIES, URL } from "../utils/constants";
import { closeAddEditDialog, closeDeleteDialog, openMessageBox } from "./actionCreators";

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

export const addEditMovie = (movieData, type) =>
    dispatch => {
        fetch(URL, {
            method: type === "Add" ? "POST" : "PUT",
            body: JSON.stringify(movieData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(resp => {
                dispatch(getMovies())
                dispatch(closeAddEditDialog())
                if (resp.ok) {
                    dispatch(openMessageBox(true))
                } else {
                    dispatch(openMessageBox(false))
                }
            })
            .catch(error => {
                dispatch(closeAddEditDialog())
                dispatch(openMessageBox(false))
            });
    };

export const deleteMovie = (id) =>
    dispatch => {
        fetch(`${URL}/${id}`, {
            method: "DELETE"
        })
            .then(resp => {
                dispatch(getMovies())
                dispatch(closeDeleteDialog());
                if (resp.ok) {
                    dispatch(openMessageBox(true))
                } else {
                    dispatch(openMessageBox(false))
                }
            })
            .catch(error => {
                dispatch(closeDeleteDialog());
                dispatch(openMessageBox(false))
            });
    };