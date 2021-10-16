import { FALLBACK_IMG_SRC } from "./constants";

export const replaceImgSrcWithFallback = event => {
    event.target.src = FALLBACK_IMG_SRC;
}

export const checkMovieData = (movieData) => {
    const copy = JSON.parse(JSON.stringify(movieData));   
    for (const property in copy) {
        if (copy.hasOwnProperty(property)) {
            if (copy[property] === null && property !== "release_date")
                copy[property] = "";
        }
    }
    return copy;
};