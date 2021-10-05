import { createTheme } from '@material-ui/core/styles';

const muiTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#f65261",
        },
        secondary: {
            main: "#232323"
        }
    }
});

export default muiTheme;