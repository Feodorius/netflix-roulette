import React, { useEffect } from "react";
import "./sort-bar.styles.scss";
import { Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/thunks";
import { ACTION_SORT } from "../../utils/constants"
import { useHistory } from "react-router";
import queryString from "query-string";

const SortBar = () => {
    const history = useHistory();
    const sortOption = useSelector(state => state.sortOption);
    const filterOption = useSelector(state => state.filterOption);
    const query = queryString.parse(history.location.search);
    const dispatch = useDispatch();

    useEffect(() => {
        syncQueryWithRedux();
    }, []);

    const syncQueryWithRedux = () => {
        if (history.location.pathname.indexOf("/search") === 0) {
            if ((query.sortBy === "release_date" || query.sortBy === "vote_average")
                && query.sortBy !== sortOption) {
                dispatch({ type: ACTION_SORT, payload: query.sortBy })
            }
        }
    };


    const sortByParameter = (event) => {
        dispatch({ type: ACTION_SORT, payload: event.target.value })
        if (location.pathname.indexOf("/search") === 0) {
            const query = { sortBy: event.target.value, genre: filterOption };
            history.push({
                pathname: location.pathname,
                search: `?${queryString.stringify(query)}`
            });
            dispatch(getMovies());
        } else {
            dispatch(getMovies());
        }
    };

    return (
        <div className="sort-bar-container">
            <span className="sort-bar-label">SORT BY</span>
            <Select
                className="sort-bar"
                value={sortOption}
                disableUnderline
                variant="standard"
                onChange={sortByParameter}
                displayEmpty>
                <MenuItem value="release_date">Release Date</MenuItem>
                <MenuItem value="vote_average">Rating</MenuItem>
            </Select>
        </div>
    )
};

export default SortBar;