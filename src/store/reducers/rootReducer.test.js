
import rootReducer from "./rootReducer";
import initialState from "../initialState";
import {
    ACTION_FILTER,
    ACTION_SORT,
    ACTION_SEARCH,
    ACTION_GET_MOVIES,
    ACTION_MANAGE_ADD_EDIT_DIALOG,
    ACTION_MANAGE_DELETE_DIALOG,
    ACTION_SELECT_MOVIE,
    ACTION_MANAGE_MESSAGE_BOX
} from "../../utils/constants";

/**
* @jest-environment jsdom
*/
describe("Testing Redux reducer:", () => {
    const previousState = {};
    test('should return the initial state', () => {
        expect(rootReducer(undefined, {})).toEqual(initialState);
    })

    test('should handle filter change', () => {
        expect(rootReducer(previousState, { type: ACTION_FILTER, payload: "Documentary" }))
            .toEqual({ ...previousState, filterOption: "Documentary" })
    })
    test('should handle sort change', () => {
        expect(rootReducer(previousState, { type: ACTION_SORT, payload: "release_date" }))
            .toEqual({ ...previousState, sortOption: "release_date" })
    })
    test('should handle search change', () => {
        expect(rootReducer(previousState, { type: ACTION_SEARCH, payload: "test string" }))
            .toEqual({ ...previousState, searchString: "test string" })
    })
    test('should handle movie selection', () => {
        expect(rootReducer(previousState, { type: ACTION_SELECT_MOVIE, payload: { id: "123", name: "test name" } }))
            .toEqual({ ...previousState, selectedMovie: { id: "123", name: "test name" } })
    })
    test('should handle movie fetch', () => {
        expect(rootReducer(previousState, { type: ACTION_GET_MOVIES, payload: { movies: [], totalMovies: 12 } }))
            .toEqual({ ...previousState, movies: [], totalMovies: 12 })
    })
    test('should handle add/edit dialog', () => {
        expect(rootReducer(previousState, { type: ACTION_MANAGE_ADD_EDIT_DIALOG, payload: { opened: true, type: "Edit", movieData: {} } }))
            .toEqual({ ...previousState, addEditDialog: { opened: true, type: "Edit", movieData: {} } })
    })
    test('should handle delete dialog', () => {
        expect(rootReducer(previousState, { type: ACTION_MANAGE_DELETE_DIALOG, payload: { opened: true, movieData: {} } }))
            .toEqual({ ...previousState, deleteDialog: { opened: true, movieData: {} } })
    })
    test('should handle message box', () => {
        expect(rootReducer(previousState, { type: ACTION_MANAGE_MESSAGE_BOX, payload: { opened: true, isSuccessfull: true } }))
            .toEqual({ ...previousState, messageBox: { opened: true, isSuccessfull: true } })
    })
});
