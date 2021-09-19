import React from "react";
import "./body.styles.scss";

import FilterBar from "../../components/filter-bar/filter-bar.component";
import Movies from "../movies/movies.container";

const Body = () => (
    <div className="body-container">
        <div className="sort-filter-toolbar">
            <FilterBar />
            <div className="break-line" />
        </div>
        <Movies />

    </div>
);

export default Body;