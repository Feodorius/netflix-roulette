import React from "react";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";

import { FILTER_GENRES } from "../../utils/constants";
import "./filter-bar.styles.scss";

import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/thunks";
import { FILTER } from "../../utils/constants";


const FilterBar = () => {
    const filterOption = useSelector(state => state.filterOption);
    const dispatch = useDispatch();

    const filterByGenre = (event, newValue) => {
        event.preventDefault();
        dispatch({ type: FILTER, payload: FILTER_GENRES[newValue] })
        dispatch(getMovies());
    };

    return (
        <Tabs value={FILTER_GENRES.indexOf(filterOption)} onChange={filterByGenre}>
            {FILTER_GENRES.map((name, index) => (
                <Tab
                    disableRipple
                    key={index}
                    className="filter-tab"
                    label={name} />
            ))}
        </Tabs>
    );
};


export default FilterBar;