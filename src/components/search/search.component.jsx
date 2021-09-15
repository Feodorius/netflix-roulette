import React from "react";
import "./search.styles.scss";

const Search = () => (
    <div className="search">
        <input type="text" className="search-field" placeholder="What do you want to watch?"/>
        <div className="search-button">
            <span className="search-button-text">SEARCH</span>
        </div>
    </div>
);

export default Search;