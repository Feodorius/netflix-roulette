import { closeAddEditDialog, openMessageBox } from "../store/actionCreators";
import { getMovies } from "../store/thunks";
import { URL, RESPONSE_LIMIT } from "./constants";

export const getSearchQuery = (sortOption = "release_date", filterOption = "All", searchString = "") => {
    const searchQuery = searchString ? `&search=${encodeURI(searchString)}&searchBy=title` : "";
    const sortQuery = `&sortBy=${sortOption}&sortOrder=desc`;
    const filterQuery = filterOption === "All" ? "" : `&filter=${filterOption}`;
    return `${URL}${RESPONSE_LIMIT}${sortQuery}${filterQuery}${searchQuery}`;
};