import React from "react";
import "./add-edit-dialog.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import { genres } from "../../utils/constants";

import CloseIcon from '@material-ui/icons/Close';
import { Dialog, DialogContent, IconButton, Input, InputLabel, Select, MenuItem, Checkbox, ListItemText, TextField } from "@material-ui/core";
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { useFormik } from 'formik';
import { validate } from "../../utils/formik";
import { checkMovieData } from "../../utils/utils";

import { closeAddEditDialog } from "../../store/actionCreators";
import { useSelector, useDispatch } from "react-redux";


const AddEditDialog = () => {
    const dialog = useSelector(state => state.addEditDialog);
    const movieData = dialog.movieData || {
        "title": "",
        "vote_average": "",
        "release_date": null,
        "poster_path": "",
        "overview": "",       
        "genres": [],
        "runtime": ""
    };
    const dispatch = useDispatch();

    const movieGenres = [...new Set([...genres, ...movieData.genres])];
    const initialValues = checkMovieData(movieData);
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            // close();
        },
    });

    const handleGenreSelect = (event) => {
        const { value } = event.target;
        const genres = typeof value === 'string' ? value.split(',') : value;
        formik.setFieldValue("genres", genres);
    };

    const handleDateChange = value => {
        const newValue = `${value.getFullYear()}-${value.getMonth() + 1}-${value.getDate()}`;
        formik.setFieldValue("release_date", newValue);
    }

    const closeDialog = () => {
        dispatch(closeAddEditDialog());
    };

    return (
        <>
            <Dialog
                className="dialog-container"
                onClose={closeDialog}
                open={dialog.opened}>
                <IconButton
                    onClick={closeDialog}
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
                        <h2 className="dialog-heading">{dialog.type === "Edit" ? "EDIT MOVIE" : "ADD MOVIE"}</h2>
                        <form className="dialog-form">
                            <div className="long-inputs">
                                <InputLabel className="dialog-label">
                                    TITLE
                                    <Input
                                        color="secondary"
                                        id="name"
                                        name="title"
                                        className="dialog-input"
                                        placeholder="Movie title"
                                        value={formik.values.title}
                                        error={formik.touched.title && Boolean(formik.errors.title)}
                                        helpertext={formik.touched.title && formik.errors.title}
                                        onChange={formik.handleChange} />
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    MOVIE POSTER URL
                                    <Input
                                        color="secondary"
                                        name="poster_path"
                                        id="poster_path"
                                        className="dialog-input"
                                        error={formik.touched.poster_path && Boolean(formik.errors.poster_path)}
                                        helpertext={formik.touched.poster_path && formik.errors.poster_path}
                                        placeholder="https://"
                                        value={formik.values.poster_path}
                                        onChange={formik.handleChange} />
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    GENRE
                                    <Select
                                        color="secondary"
                                        name="genres"
                                        id="genres"
                                        multiple
                                        className="dialog-input select"
                                        displayEmpty
                                        error={formik.touched.genres && Boolean(formik.errors.genres)}
                                        helpertext={formik.touched.genres && formik.errors.genres}
                                        value={formik.values.genres}
                                        onChange={handleGenreSelect}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <span>Select Genre</span>;
                                            }
                                            return selected.join(', ')
                                        }}
                                        variant="outlined">
                                        {movieGenres.map(genre => (
                                            <MenuItem key={genre} value={genre}>
                                                <Checkbox checked={formik.values.genres.indexOf(genre) > -1} />
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
                                            color="secondary"
                                            name="release_date"
                                            id="release_date"
                                            onChange={handleDateChange}
                                            value={formik.values.release_date}
                                            renderInput={(params) => (
                                                <TextField color="secondary" className="dialog-input datepicker" {...params} />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    RATING
                                    <Input
                                        color="secondary"
                                        name="vote_average"
                                        id="vote_average"
                                        onChange={formik.handleChange}
                                        className="dialog-input"
                                        placeholder="7.8"
                                        value={formik.values.vote_average} />
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    RUNTIME
                                    <Input
                                        color="secondary"
                                        name="runtime"
                                        id="runtime"
                                        onChange={formik.handleChange}
                                        className="dialog-input"
                                        placeholder="Minutes"
                                        error={formik.touched.runtime && Boolean(formik.errors.runtime)}
                                        helpertext={formik.touched.runtime && formik.errors.runtime}
                                        value={formik.values.runtime} />
                                </InputLabel>
                            </div>
                            <InputLabel className="dialog-label textarea">
                                OVERVIEW
                                <Input
                                    color="secondary"
                                    name="overview"
                                    id="overview"
                                    onChange={formik.handleChange}
                                    className="dialog-input"
                                    sx={{ height: 200 }}
                                    rows={9}
                                    multiline
                                    placeholder="Movie description"
                                    error={formik.touched.overview && Boolean(formik.errors.overview)}
                                    helpertext={formik.touched.overview && formik.errors.overview}
                                    value={formik.values.overview} />
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
                                handleClick={formik.handleSubmit}>
                                SUBMIT
                            </CustomButton>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
};

export default AddEditDialog;