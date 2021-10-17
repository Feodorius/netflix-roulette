import { MANAGE_ADD_EDIT_DIALOG, MANAGE_DELETE_DIALOG, MANAGE_MESSAGE_BOX } from "../utils/constants";
export const openAddDialog = () => (
    {
        type: MANAGE_ADD_EDIT_DIALOG, payload: { type: "Add", opened: true, movieData: null }
    });

export const openEditDialog = (movieData) => (
    {
        type: MANAGE_ADD_EDIT_DIALOG, payload: { type: "Edit", opened: true, movieData }
    });
export const closeAddEditDialog = () => (
    {
        type: MANAGE_ADD_EDIT_DIALOG, payload: { type: "Add", opened: false, movieData: null }
    });

export const openDeleteDialog = (movieData) => (
    {
        type: MANAGE_DELETE_DIALOG, payload: { opened: true, movieData }
    });
export const closeDeleteDialog = () => (
    {
        type: MANAGE_DELETE_DIALOG, payload: { opened: false, movieData: null }
    });

export const openMessageBox = (success) => (
    {
        type: MANAGE_MESSAGE_BOX, payload: { opened: true, success }
    });
export const closeMessageBox = () => (
    {
        type: MANAGE_MESSAGE_BOX, payload: { opened: false, success: false }
    });