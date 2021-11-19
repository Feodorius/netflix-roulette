import { validate } from "../utils/formik";


describe("utils formik validation test:", () => {
    const values = {
        title: "",
        release_date: "",
        poster_path: "",
        overview: "",
        runtime: "",
        vote_average: 11,
        genres: []
    };
    const validValues = {
        title: "Test",
        release_date: "2020-12-12",
        poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
        overview: "test",
        runtime: "123",
        vote_average: 10,
        genres: ["Comedy"]
    };
    const errors = {
        title: "Please provide the title",
        release_date: "Please provide the release date",
        poster_path: "Please provide the url for the poster",
        overview: "Please provide the overview",
        runtime: "Please provide the runtime",
        vote_average: "Rating should be positive between 0 and 10",
        genres: "Please choose the genres",
    };
    it('should return object with errors', () => {
        expect(validate(values)).toEqual(errors);
    });
    it('should validate negative runtime ', () => {
        expect(validate({ poster_path: "", runtime: -10, genres: [] }).runtime).toBe("Runtime should be positive value");
    });
    it('should validate NaN runtime ', () => {
        expect(validate({ poster_path: "", runtime: "test", genres: [] }).runtime).toBe("Runtime should be number");
    });
    it('should validate NaN vote_average ', () => {
        expect(validate({ poster_path: "", vote_average: "test", genres: [] }).vote_average).toBe("Rating should be number");
    });
    it('should validate negative vote_average ', () => {
        expect(validate({ poster_path: "", vote_average: "-1", genres: [] }).vote_average).toBe("Rating should be positive between 0 and 10");
    });
    it('should validate invalid poster_path ', () => {
        expect(validate({ poster_path: "http://", genres: [] }).poster_path).toBe("Please provide the correct url");
    });
    it('should return empty error object if all is fine', () => {
        expect(validate(validValues)).toEqual({});
    });
});