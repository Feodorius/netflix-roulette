import React from "react";
import "./menu-button.styles.scss";
import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';

import DeleteDialog from "../delete-dialog/delete-dialog.component";



const options = [
    'Edit',
    'Delete'
];

export default function MenuButton({ movieData }) {
    const [opened, setOpened] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setOpened(true);
    };
    const closeMenu = () => {
        setAnchorEl(null);        
    };


    const [isOpenedDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const closeDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };
    const openDeleteDialog = () => {
        setOpenDeleteDialog(true);
    };


    const selectMenuItem = (event) => {
        if (event.currentTarget.textContent === 'Delete') {
            openDeleteDialog();
        }
        closeMenu();
    };

    console.log("render");

    return (
        <div className="menu-icon">
            {opened && <DeleteDialog isOpened={isOpenedDeleteDialog} close={closeDeleteDialog} />}
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
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={closeMenu}
            >
                {options.map((option) => (
                    <MenuItem key={option} onClick={selectMenuItem}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}