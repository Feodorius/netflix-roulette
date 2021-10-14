import { URL } from "./constants";

export const getUrl = (sortOption = "release_date", filterOption = "All", searchString = "") => {
    const searchQuery = searchString ? `&search=${encodeURI(searchString)}&searchBy=title` : "";
    const sortQuery = `&sortBy=${sortOption}&sortOrder=desc`;
    const filterQuery = filterOption === "All" ? "" : `&filter=${filterOption}`;
    return URL + sortQuery + filterQuery + searchQuery;
};