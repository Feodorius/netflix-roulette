import React from "react";
import "./search.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { TextField } from '@material-ui/core';
import Logo from "../../components/logo/logo.component";
import "../../components/logo/logo.styles.scss";
import AddButton from "../../components/add-button/add-button.component";

import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/thunks";
import { ACTION_SEARCH } from "../../utils/constants";
import { useQuery } from "../../utils/hooks";

const Search = () => {
    const query = useQuery();
    
    const searchString = useSelector(state => state.searchString);
    const dispatch = useDispatch();
    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    const handleSearch = () => dispatch(getMovies());

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