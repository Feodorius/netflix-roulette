import React from "react";
import "./menu-button.styles.scss";

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';

import { MENU_BUTTON_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { openEditDialog, openDeleteDialog } from "../../store/actionCreators";


const MenuButton = ({ movieData }) => {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const closeMenu = () => setAnchorEl(null);

    const selectMenuItem = (event) => {
        if (event.currentTarget.textContent === 'Delete') {
            dispatch(openDeleteDialog(movieData));
        }
        if (event.currentTarget.textContent === 'Edit') {
            dispatch(openEditDialog(movieData));
        }
        closeMenu();
    };

    return (
        <div className="menu-icon">
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
                {MENU_BUTTON_OPTIONS.map((option) => (
                    <MenuItem key={option} onClick={selectMenuItem}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default MenuButton;