import React from "react";
import "./add-button.styles.scss";
import { makeStyles } from "@material-ui/styles";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { openAddDialog } from "../../store/actionCreators";
import { useDispatch } from "react-redux";

const muiTheme = createTheme({
    palette: {
        primary: {
            main: "rgba(96, 96, 96, 0.68)"
        }
    }
});

const AddButton = () => {
    const styles = makeStyles({
        contained: {
            width: "180px",
            height: "48px",
        }
    })();

    const dispatch = useDispatch();
    const openDialog = () => {
        dispatch(openAddDialog());
    };

    return (
        <>
            <ThemeProvider theme={muiTheme}>
                <Button
                    variant="contained"
                    classes={{ contained: styles.contained }}
                    color="primary"
                    className="add-button"
                    onClick={openDialog}>
                    + ADD MOVIE
                </Button>
            </ThemeProvider>
        </>
    );
};

export default AddButton;