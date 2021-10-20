import React from "react";
import "./sort-bar.styles.scss";
import { Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/thunks";
import { ACTION_SORT } from "../../utils/constants"

const SortBar = () => {

    const sortOption = useSelector(state => state.sortOption);
    const dispatch = useDispatch();

    const sortByParameter = (event) => {
        dispatch({ type: ACTION_SORT, payload: event.target.value })
        dispatch(getMovies());
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