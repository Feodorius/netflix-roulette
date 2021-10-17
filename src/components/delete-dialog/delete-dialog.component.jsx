import React from "react";
import "./delete-dialog.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Dialog, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from "react-redux";
import { closeDeleteDialog, openMessageBox } from "../../store/actionCreators";
import { getMovies } from "../../store/thunks";

const DeleteDialog = () => {
    const dispatch = useDispatch();
    const dialog = useSelector(state => state.deleteDialog);
    const { id } = dialog.movieData;

    const deleteMovie = () => {
        fetch("http://localhost:4000/movies/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(resp => {
                dispatch(getMovies())
                closeDialog()
                if (resp.ok) {
                    dispatch(openMessageBox(true))
                } else {
                    dispatch(openMessageBox(false))
                }
            })
            .catch(error => {
                closeDialog()
                dispatch(openMessageBox(false))
            });
    };

    const closeDialog = () => {
        dispatch(closeDeleteDialog());
    };
    return (
        <>
            <Dialog
                className="delete-dialog-container"
                onClose={closeDialog}
                open={dialog.opened}>
                <IconButton
                    onClick={closeDialog}
                    sx={{
                        position: 'absolute',
                        right: 25,
                        top: 25,
                        color: "#fff"
                    }}>
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <div className="delete-dialog">
                        <h2 className="delete-dialog-heading">DELETE MOVIE</h2>
                        <h3 className="delete-dialog-subheading">Are you sure you want to delete this movie?</h3>
                        <CustomButton
                            variant="contained"
                            handleClick={deleteMovie}>
                            CONFIRM
                        </CustomButton>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
};

export default DeleteDialog;