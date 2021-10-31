import React from "react";
import "./body.styles.scss";

import FilterBar from "../../components/filter-bar/filter-bar.component";
import Movies from "../movies/movies.container";
import SortBar from "../../components/sort-bar/sort-bar.component";
import ErrorBoundary from "../../components/error-boundary/error-boundary.component";

const Body = () => (
    <ErrorBoundary>
        <div className="body-container">
            <div className="sort-filter-toolbar">
                <FilterBar />
                <SortBar />
            </div>
            <div className="break-line" />
            <Movies />
        </div>
    </ErrorBoundary>
);

export default Body;