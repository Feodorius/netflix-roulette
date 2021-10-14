import React from "react";
import "./add-button.styles.scss";
import { makeStyles } from "@material-ui/styles";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import AddEditDialog from "../add-edit-dialog/add-edit-dialog.component";

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

    const [isDialogOpened, setDialogOpened] = React.useState(false);

    return (
        <>
            {isDialogOpened &&

                <AddEditDialog isOpened={isDialogOpened} close={() => setDialogOpened(false)} type="Add" />
            }
            <ThemeProvider theme={muiTheme}>
                <Button variant="contained" classes={{ contained: styles.contained }} color="primary" className="add-button" onClick={() => setDialogOpened(true)}>
                    + ADD MOVIE
                </Button>
            </ThemeProvider>
        </>
    );
};

export default AddButton;