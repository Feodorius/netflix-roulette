export const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = "Please provide the title"
    }
    if (!values.release_date) {
        errors.release_date = "Please provide the release date"
    }
    if (!values.poster_path.includes("https://")) {
        errors.poster_path = "Please provide the correct url"
    }
    if (!values.poster_path.includes("https://")) {
        errors.poster_path = "Please provide the correct url"
    }
    if (!values.poster_path) {
        errors.poster_path = "Please provide the url for the poster"
    }
    if (!values.overview) {
        errors.overview = "Please provide the overview"
    }
    if (!values.runtime) {
        errors.runtime = "Please provide the runtime"
    } else if (values.runtime <= 0) {
        errors.runtime = "Runtime should be positive value"
    } else if (isNaN(Number(values.runtime))) {
        errors.runtime = "Runtime should be number"
    }
    if (values.vote_average < 0 || values.vote_average > 10) {
        errors.vote_average = "Rating should be positive between 0 and 10"
    } else if (isNaN(Number(values.vote_average))) {
        errors.vote_average = "Rating should be number"
    }
    if (!values.genres.length) {
        errors.genres = "Please choose the genres"
    }
    return errors;
};