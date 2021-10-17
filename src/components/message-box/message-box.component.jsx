import React from "react";
import { Dialog, DialogContent, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import "./message-box.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { closeMessageBox } from "../../store/actionCreators";

const MessageBox = () => {
    const dispatch = useDispatch();
    const messageBox = useSelector(state => state.messageBox)
    return (
        <>
            <Dialog
                className="message-box"
                onClose={() => dispatch(closeMessageBox())}
                open={messageBox.opened}>
                <IconButton
                    onClick={() => dispatch(closeMessageBox())}
                    sx={{
                        position: 'absolute',
                        right: 25,
                        top: 25,
                        color: "#fff"
                    }}>
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <div className="box">
                        <div className="icon-container">
                            {
                                messageBox.success ? <DoneIcon className="icon" /> : <ClearIcon className="icon" />
                            }
                        </div>
                        <h2>{messageBox.success ? "CONGRADULATIONS!" : "ERROR!"}</h2>
                        <h3>{messageBox.success ? "Operation was finished successfully!" : "Something went wrong."} </h3>
                    </div>
                </DialogContent>
            </Dialog >
        </>
    );


};

export default MessageBox;