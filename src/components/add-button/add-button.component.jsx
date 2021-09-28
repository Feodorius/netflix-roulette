import React from "react";
import "./add-button.styles.scss";
import { makeStyles } from "@material-ui/styles";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


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
            height: "46px",

        }
    })();

    return (
        <ThemeProvider theme={muiTheme}>
            <Button variant="contained" classes={{ contained: styles.contained }} color="primary" className="add-button">
                + ADD MOVIE
            </Button>
        </ThemeProvider>
    );
};

export default AddButton;