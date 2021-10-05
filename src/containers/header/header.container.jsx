import React from "react";
import "./header.styles.scss";
import "../../components/logo/logo.styles.scss";

import Logo from "../../components/logo/logo.component";
import AddButton from "../../components/add-button/add-button.component";
import Search from "../../components/search/search.component";


const Header = () => (
    <div className="header">
        <div className="header-background" />
        <Logo/>
        <AddButton />

        <div className="header-center">
            <h1 className="heading">FIND YOUR MOVIE</h1>
            <Search />
        </div>
    </div>
);

export default Header;