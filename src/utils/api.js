import { URL, RESPONSE_LIMIT } from "./constants";

export const getSearchQuery = (sortOption = "release_date", filterOption = "all", searchString = "") => {
    const searchQuery = searchString ? `&search=${encodeURI(searchString)}&searchBy=title` : "";
    const sortQuery = `&sortBy=${sortOption}&sortOrder=desc`;
    const filterQuery = filterOption === "all" ? "" : `&filter=${filterOption}`;
    return `${URL}${RESPONSE_LIMIT}${sortQuery}${filterQuery}${searchQuery}`;
};

export const getMovieData = id => fetch(`${URL}/${id}`);