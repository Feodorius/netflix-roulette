import { ACTION_MANAGE_ADD_EDIT_DIALOG, ACTION_MANAGE_DELETE_DIALOG, ACTION_MANAGE_MESSAGE_BOX } from "../utils/constants";
export const openAddDialog = () => (
    {
        type: ACTION_MANAGE_ADD_EDIT_DIALOG, payload: { type: "Add", opened: true, movieData: null }
    });

export const openEditDialog = (movieData) => (
    {
        type: ACTION_MANAGE_ADD_EDIT_DIALOG, payload: { type: "Edit", opened: true, movieData }
    });
export const closeAddEditDialog = () => (
    {
        type: ACTION_MANAGE_ADD_EDIT_DIALOG, payload: { type: "Add", opened: false, movieData: null }
    });

export const openDeleteDialog = (movieData) => (
    {
        type: ACTION_MANAGE_DELETE_DIALOG, payload: { opened: true, movieData }
    });
export const closeDeleteDialog = () => (
    {
        type: ACTION_MANAGE_DELETE_DIALOG, payload: { opened: false, movieData: null }
    });

export const openMessageBox = (isSuccessfull) => (
    {
        type: ACTION_MANAGE_MESSAGE_BOX, payload: { opened: true, isSuccessfull }
    });
export const closeMessageBox = () => (
    {
        type: ACTION_MANAGE_MESSAGE_BOX, payload: { opened: false, isSuccessfull: false }
    });