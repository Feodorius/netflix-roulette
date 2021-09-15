import React from "react";
import "./body.styles.scss";

import MovieItem from "../../components/movie-item/movie-item.component";
import jsonData from "../../../public/mockData";

const Body = () => (
    <div className="body-container">
        <div className="movies-container">
            {
                jsonData.map(({ id, ...otheProps }) => (
                    <MovieItem key={id} {...otheProps} />
                ))
            }
        </div>
    </div>
);

export default Body;