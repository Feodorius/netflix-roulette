import React from "react";
import "./add-edit-dialog.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { genres } from "../../utils/constants";
import { Dialog, DialogContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { Input, InputLabel, Select, MenuItem, Checkbox, ListItemText, TextField } from "@material-ui/core";
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const AddEditDialog = ({ isOpened, close, movieData, type }) => {
    const [form, changeForm] = React.useState(movieData);

    const handleGengeSelect = (event) => {
        const { value } = event.target;
        changeForm(
            { ...form, genres: typeof value === 'string' ? value.split(',') : value }
        );
    };

    const handleFormChange = (event) => {
        const { value, name } = event.target;
        changeForm({ ...form, [name]: value });
    };
    const handleDateChange = newValue => {
        changeForm(
            { ...form, release_date: newValue }
        );
    };

    return (
        <>
            <Dialog
                className="dialog-container"
                onClose={close}
                open={isOpened}

            >
                <IconButton
                    onClick={close}
                    sx={{
                        position: 'absolute',
                        right: 25,
                        top: 25,
                        color: "#fff"
                    }}>
                    <CloseIcon />
                </IconButton>
                <DialogContent>
                    <div className="dialog">
                        <h2 className="dialog-heading">{type === "Edit" ? "EDIT MOVIE" : "ADD MOVIE"}</h2>
                        <form className="dialog-form">
                            <div className="long-inputs">
                                <InputLabel className="dialog-label">
                                    TITLE
                                    <Input
                                        className="dialog-input"
                                        disableUnderline
                                        variant="outlined"
                                        placeholder="Movie title"
                                        value={form.title}
                                        name="title"
                                        onChange={handleFormChange} />
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    MOVIE URL
                                    <Input
                                        className="dialog-input"
                                        disableUnderline
                                        variant="outlined"
                                        placeholder="https://"
                                        value={form.poster_path}
                                        name="url"
                                        onChange={handleFormChange} />
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    GENRE
                                    <Select
                                        multiple
                                        className="dialog-input select"
                                        displayEmpty
                                        disableunderline="true"
                                        value={form.genres}
                                        onChange={handleGengeSelect}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <span>Select Genre</span>;
                                            }
                                            return selected.join(', ')
                                        }}
                                        variant="outlined">
                                        {[...genres, ...movieData.genres].map(genre => (
                                            <MenuItem key={genre} value={genre}>
                                                <Checkbox checked={form.genres.indexOf(genre) > -1} />
                                                <ListItemText primary={genre} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </InputLabel>
                            </div>
                            <div className="short-inputs">
                                <InputLabel className="dialog-label">
                                    RELEASE DATE
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            disableUnderline
                                            variant="outlined"
                                            name="release_date"
                                            onChange={handleDateChange}
                                            value={form.release_date}
                                            renderInput={(params) => (
                                                <TextField className="dialog-input datepicker" {...params} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    RATING
                                    <Input
                                        name="vote_average"
                                        onChange={handleFormChange}
                                        className="dialog-input"
                                        disableUnderline
                                        variant="outlined"
                                        placeholder="7.8"
                                        value={form.vote_average} />
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    RUNTIME
                                    <Input
                                        name="runtime"
                                        onChange={handleFormChange}
                                        className="dialog-input"
                                        disableUnderline
                                        variant="outlined"
                                        placeholder="Minutes"
                                        value={form.runtime || ""} /> 
                                        {/* will remove this plug in the next PR */}                                        
                                </InputLabel>
                            </div>
                            <InputLabel className="dialog-label textarea">
                                OVERVIEW
                                <Input
                                    name="overview"
                                    onChange={handleFormChange}
                                    className="dialog-input"
                                    sx={{ height: 200 }}
                                    rows={9}
                                    multiline
                                    disableUnderline
                                    variant="outlined"
                                    placeholder="Movie description"
                                    value={form.overview} />
                            </InputLabel>
                        </form>
                        <div className="dialog-buttons">
                            <CustomButton
                                variant="outlined"
                                handleClick={close}>
                                REJECT
                            </CustomButton>
                            <CustomButton
                                variant="contained"
                                handleClick={close}>
                                SUBMIT
                            </CustomButton>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
};

AddEditDialog.defaultProps = {
    movieData: {
        "id": "",
        "url": "",
        "title": "",
        "tagline": "",
        "vote_average": "",
        "vote_count": "",
        "release_date": null,
        "poster_path": "",
        "overview": "",
        "budget": "",
        "revenue": "",
        "genres": [],
        "runtime": 0
    }
};

export default AddEditDialog;