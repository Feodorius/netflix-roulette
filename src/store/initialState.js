const initialState = {
    movies: [],
    totalMovies: 0,
    sortOption: "release_date",
    filterOption: "All",
    searchString: "",
    deleteDialog: { opened: false, movieData: null },
    addEditDialog: { opened: false, type: "Add", movieData: null },
    messageBox: { opened: false, isSuccessfull: false }
};

export default initialState;