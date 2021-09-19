import React from "react";
import jsonData from "../../../public/mockData";
import "./movies.styles.scss";

import MovieItem from "../../components/movie-item/movie-item.component";

const Movies = () => (
    <div className="movies-container">
        {
            jsonData.map(({ id, ...otheProps }) => (
                <MovieItem key={id} {...otheProps} />
            ))
        }
    </div>
);


export default Movies;