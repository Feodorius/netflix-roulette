import React from "react";
import AddEditDialog from "../../components/add-edit-dialog/add-edit-dialog.component";
import DeleteDialog from "../../components/delete-dialog/delete-dialog.component";
import { useSelector } from "react-redux";
import MessageBox from "../../components/message-box/message-box.component";

const Dialogs = () => {
    const addEditDialog = useSelector(state => state.addEditDialog);
    const deleteDialog = useSelector(state => state.deleteDialog);
    const messageBox = useSelector(state => state.messageBox);
    return (
        <>
            {
                addEditDialog.opened && <AddEditDialog />
            }
            {
                deleteDialog.opened && <DeleteDialog />
            }
            {
                messageBox.opened && <MessageBox />
            }
        </>
    )
};

export default Dialogs;