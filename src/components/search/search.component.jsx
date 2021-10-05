import React from "react";
import "./search.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { TextField } from '@material-ui/core';


const Search = () => (
    <div className="search">
        <TextField
            className="search-field"
            placeholder="What do you want to watch?" />
        <CustomButton
            variant="contained"
            width="232px"
            handleClick={() => { }}>
            SEARCH
        </CustomButton>
    </div>
);

export default Search;