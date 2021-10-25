import React, { useEffect } from "react";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";

import { ACTION_FILTER, FILTER_GENRES } from "../../utils/constants";
import "./filter-bar.styles.scss";

import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { getMovies } from "../../store/thunks";
import { useDispatch, useSelector } from "react-redux";


const FilterBar = () => {
    const history = useHistory();
    const sortOption = useSelector(state => state.sortOption);
    const filterOption = useSelector(state => state.filterOption);
    const query = queryString.parse(history.location.search);
    const dispatch = useDispatch();

    useEffect(() => {
        syncFilterWithRedux();
    }, []);

    const syncFilterWithRedux = () => {
        if (history.location.pathname.indexOf("/search") === 0) {
            if (FILTER_GENRES.includes(query.genre) && query.genre !== filterOption) {
                dispatch({ type: ACTION_FILTER, payload: query.genre })
            }
        }
    };

    const filterByGenre = (event, newValue) => {
        event.preventDefault();
        dispatch({ type: ACTION_FILTER, payload: FILTER_GENRES[newValue] })
        if (location.pathname.indexOf("/search") === 0) {
            const query = { genre: FILTER_GENRES[newValue], sortBy: sortOption }
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