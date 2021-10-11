import React from "react";
import "./menu-button.styles.scss";
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';

import DeleteDialog from "../delete-dialog/delete-dialog.component";
import AddEditDialog from "../add-edit-dialog/add-edit-dialog.component";

const options = [
    'Edit',
    'Delete'
];

const MenuButton = ({ movieData }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const openMenu = (event) => {        
        setAnchorEl(event.currentTarget)
    };
    const closeMenu = () => setAnchorEl(null);


    const [isOpenedDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [isOpenedEditDialog, setOpenEditDialog] = React.useState(false);

    const selectMenuItem = (event) => {
        if (event.currentTarget.textContent === 'Delete') {
            setOpenDeleteDialog(true);
        }
        if (event.currentTarget.textContent === 'Edit') {
            setOpenEditDialog(true);
        }
        closeMenu();
    };

    return (
        <div className="menu-icon">
            {isOpenedDeleteDialog && <DeleteDialog isOpened={isOpenedDeleteDialog} close={() => setOpenDeleteDialog(false)} />}
            {isOpenedEditDialog && <AddEditDialog isOpened={isOpenedEditDialog} close={() => setOpenEditDialog(false)} type="Edit" movieData={movieData} />}
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls="long-menu"
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={openMenu}
            >
                <MoreVert />
            </IconButton>
            <Menu
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                id="long-menu"
                MenuListProps={{ 'aria-labelledby': 'long-button' }}
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}>
                {options.map((option) => (
                    <MenuItem key={option} onClick={selectMenuItem}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default MenuButton;