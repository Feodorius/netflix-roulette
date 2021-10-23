import { FALLBACK_IMG_SRC } from "./constants";

export const replaceImgSrcWithFallback = event => {
    event.target.src = FALLBACK_IMG_SRC;
}

export const fixMovieData = (movieData) => { // data from api sometimes has invalid fields, so this f-n fixes data
    const copy = JSON.parse(JSON.stringify(movieData));
    for (const property in copy) {
        if (copy.hasOwnProperty(property)) {
            if (copy[property] === null && property !== "release_date")
                copy[property] = "";

            if (property === "tagline" && !copy[property]) {
                copy[property] = "tagline_text";
            }
            if (property === "runtime") {
                copy[property] = Number(copy[property]);
            }
            if (property === "vote_average") {
                copy[property] = Number(copy[property]);
            }           
        }
    }
    return copy;
};