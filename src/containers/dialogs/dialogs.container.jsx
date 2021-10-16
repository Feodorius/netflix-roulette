import React from "react";
import AddEditDialog from "../../components/add-edit-dialog/add-edit-dialog.component";
import DeleteDialog from "../../components/delete-dialog/delete-dialog.component";
import { useSelector } from "react-redux";

const Dialogs = () => {
    const addEditDialog = useSelector(state => state.addEditDialog);
    const deleteDialog = useSelector(state => state.deleteDialog);
    return (
        <>
            {
                addEditDialog.opened && <AddEditDialog />
            }
            {
                deleteDialog.opened && <DeleteDialog />
            }
        </>
    )
};

export default Dialogs;