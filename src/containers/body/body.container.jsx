import React from "react";
import "./body.styles.scss";

import FilterBar from "../../components/filter-bar/filter-bar.component";
import Movies from "../movies/movies.container";
import SortBar from "../../components/sort-bar/sort-bar.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

import jsonData from "../../../public/mockData";

const Body = () => (
    <div className="body-container">
        <div className="sort-filter-toolbar">
            <FilterBar />
            <SortBar />
        </div>
        <div className="break-line" />
        <ErrorBoundary>
            <Movies movies={jsonData} />
        </ErrorBoundary>

    </div>
);

export default Body;