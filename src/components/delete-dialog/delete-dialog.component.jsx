import React from "react";
import "./delete-dialog.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Dialog, DialogContent, DialogActions, DialogTitle, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const DeleteDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <button onClick={handleClickOpen}>
                Open dialog
            </button>

            <Dialog
                className="delete-dialog-container"
                onClose={handleClose}
                open={open}
            >
                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 25,
                        top: 25,
                        color: "#fff"
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent>

                    <div className="delete-dialog">
                        <h2 className="delete-dialog-heading">
                            DELETE MOVIE
                        </h2>
                        <h3 className="delete-dialog-subheading">
                            Are you sure you want to delete this movie?
                        </h3>
                        <CustomButton variant="contained" handleClick={handleClose}>
                            CONFIRM
                        </CustomButton>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default DeleteDialog;