import React from "react";
import "./body.styles.scss";

import FilterBar from "../../components/filter-bar/filter-bar.component";
import Movies from "../movies/movies.container";
import SortBar from "../../components/sort-bar/sort-bar.component";

import jsonData from "../../../public/mockData";

const Body = () => (
    <div className="body-container">
        <div className="sort-filter-toolbar">
            <FilterBar />
            <SortBar />
        </div>
        <div className="break-line" />
        <Movies movies={jsonData} />

    </div>
);

export default Body;