export const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = "Please provide the title"
    }
    if (!values.poster_path) {
        errors.poster_path = "Please provide the url for the poster"
    }
    if (!values.overview) {
        errors.overview = "Please provide the overview"
    }
    if (!values.runtime) {
        errors.runtime = "Please provide the runtime"
    }
    if (!values.genres.length) {
        errors.genres = "Please choose the genres"
    }

    return errors;
};