import React from "react";
import "./delete-dialog.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { Dialog, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Profiler } from "react";

const DeleteDialog = ({ isOpened, close }) => {
    const callback = (id, phase, commitTime, interactions) => {
        console.log(id, phase, commitTime, interactions)
    };

    return (
        <>
            <Profiler id="Dialog" onRender={callback}>
                <Dialog
                    className="delete-dialog-container"
                    onClose={close}
                    open={isOpened}>
                    <IconButton
                        onClick={close}
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
                                handleClick={close}>CONFIRM</CustomButton>
                        </div>
                    </DialogContent>
                </Dialog>
            </Profiler>
        </>
    );
};

export default DeleteDialog;