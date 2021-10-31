import React, { useEffect } from "react";
import "./search.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { TextField } from '@material-ui/core';
import Logo from "../../components/logo/logo.component";
import "../../components/logo/logo.styles.scss";
import AddButton from "../../components/add-button/add-button.component";

import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/thunks";
import { ACTION_SEARCH } from "../../utils/constants";
import { useHistory, useParams } from "react-router";
import queryString from "query-string";

const Search = () => {
    const history = useHistory();
    const query = queryString.parse(history.location.search);
    const sortOption = useSelector(state => state.sortOption);
    const filterOption = useSelector(state => state.filterOption);
    const searchString = useSelector(state => state.searchString);
    const { searchQuery } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        syncQueryWithRedux();
    }, []);

    useEffect(() => {
        addFilterSortQueries();
    }, [searchString, sortOption, filterOption]);

    const syncQueryWithRedux = () => {
        if (searchQuery !== searchString) {
            const search = searchQuery || "";
            dispatch({ type: ACTION_SEARCH, payload: search })
        }
    };

    const addFilterSortQueries = () => {
        const checkArray = ["/search", "/search/", `/search/${searchString}`];
        if (checkArray.includes(history.location.pathname)) {
            history.replace({
                pathname: `/search${searchString ? '/' + searchString : ''}`,
                search: `?${queryString.stringify({ genre: filterOption, sortBy: sortOption })}`
            });
        }
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        let pathname = "/search";
        if (searchString) {
            pathname = `/search/${searchString}`
        }
        history.push({
            pathname,
            search: `?${queryString.stringify(query)}`
        });
        dispatch(getMovies());
    };

    return (
        <div className="header">
            <div className="header-background" />
            <Logo />
            <AddButton />

            <div className="header-center">
                <h1 className="heading">FIND YOUR MOVIE</h1>
                <div className="search">
                    <TextField
                        value={searchString}
                        onChange={e => dispatch({ type: ACTION_SEARCH, payload: e.target.value })}
                        onKeyPress={handleEnterPress}
                        className="search-field"
                        placeholder="What do you want to watch?" />
                    <CustomButton
                        variant="contained"
                        width="232px"
                        handleClick={handleSearch}>
                        SEARCH
                    </CustomButton>
                </div>
            </div>
        </div>
    )
};

export default Search;