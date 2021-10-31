import React from "react";
import "./delete-dialog.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Dialog, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from "react-redux";
import { closeDeleteDialog } from "../../store/actionCreators";
import { deleteMovie } from "../../store/thunks";

const DeleteDialog = () => {
    const dispatch = useDispatch();
    const dialog = useSelector(state => state.deleteDialog);
    const { id } = dialog.movieData;

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
                            handleClick={() => dispatch(deleteMovie(id))}>
                            CONFIRM
                        </CustomButton>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
};

export default DeleteDialog;