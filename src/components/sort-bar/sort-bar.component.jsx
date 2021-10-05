import React from "react";
import "./sort-bar.styles.scss";
import { Select, MenuItem } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const SortBar = () => {
    const [sortValue, setSortParameter] = React.useState('release_date');

    const sortByParameter = (event) => {
        setSortParameter(event.target.value);
    };

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        }
    });

    return (

        <div className="sort-bar-container">
            <span className="sort-bar-label">SORT BY</span>
            <ThemeProvider theme={darkTheme}>
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
            </ThemeProvider>
        </div>

    )
};


export default SortBar;