import React from "react";
import "./search.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { TextField } from '@material-ui/core';
import Logo from "../../components/logo/logo.component";
import "../../components/logo/logo.styles.scss";
import AddButton from "../../components/add-button/add-button.component";


const Search = () => (
    <div className="header">
        <div className="header-background" />
        <Logo />
        <AddButton />

        <div className="header-center">
            <h1 className="heading">FIND YOUR MOVIE</h1>
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
        </div>
    </div>
);

export default Search;