import React from "react";
import "./sort-bar.styles.scss";
import { Select, MenuItem } from '@material-ui/core';

const SortBar = () => {
    const [sortValue, setSortParameter] = React.useState('release_date');

    const sortByParameter = (event) => {
        setSortParameter(event.target.value);
    };

    return (
        <div className="sort-bar-container">
            <span className="sort-bar-label">SORT BY</span>
            <Select
                className="sort-bar"
                value={sortValue}
                disableUnderline
                variant="standard"
                onChange={sortByParameter}
                displayEmpty>
                <MenuItem value="release_date">Release Date</MenuItem>
                <MenuItem value="vote_average">Rating</MenuItem>
                <MenuItem value="title">Name</MenuItem>
            </Select>
        </div>
    )
};


export default SortBar;