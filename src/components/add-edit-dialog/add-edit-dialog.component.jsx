import React, { useState } from "react";
import "./add-edit-dialog.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
import MessageBox from "../message-box/message-box.component";
import { genres } from "../../utils/constants";

import CloseIcon from '@material-ui/icons/Close';
import { Dialog, DialogContent, IconButton, InputLabel, Select, MenuItem, Checkbox, ListItemText, TextField, FormControl, FormHelperText } from "@material-ui/core";
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import { useFormik } from 'formik';
import { validate } from "../../utils/formik";
import { checkMovieData } from "../../utils/utils";

import { closeAddEditDialog, openMessageBox } from "../../store/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../store/thunks";

const AddEditDialog = () => {
    const dialog = useSelector(state => state.addEditDialog);
    const [messageBoxOpen, setMessageBoxOpen] = useState(false);
    const [operationSuccessfull, setOperationSuccessfull] = useState(false);

    const movieData = dialog.movieData || {
        "title": "",
        "vote_average": "",
        "release_date": null,
        "poster_path": "",
        "overview": "",
        "genres": [],
        "runtime": "",
    };

    const dispatch = useDispatch();

    const movieGenres = [...new Set([...genres, ...movieData.genres])];
    const initialValues = checkMovieData(movieData);
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values => {
            values.release_date = values.release_date ? values.release_date : "";
            addEditMovie(checkMovieData(values), dispatch, dialog.type);

        },
    });

    const addEditMovie = (movieData, dispatch, type) => {
        fetch("http://localhost:4000/movies", {
            method: type === "Add" ? "POST" : "PUT",
            body: JSON.stringify(movieData),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(resp => {
                dispatch(getMovies())
                closeDialog()
                if (resp.ok) {
                    dispatch(openMessageBox(true))
                } else {
                    dispatch(openMessageBox(false))
                }
            })
            .catch(error => {
                closeDialog()
                dispatch(openMessageBox(false))
            });
    }

    const handleGenreSelect = (event) => {
        const { value } = event.target;
        const genres = typeof value === 'string' ? value.split(',') : value;
        formik.setFieldValue("genres", genres);
    };

    const handleDateChange = value => {
        const day = value.getDate() < 10 ? `0${value.getDate()}` : value.getDate();
        const newValue = `${value.getFullYear()}-${value.getMonth() + 1}-${day}`;
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
                                    <TextField
                                        value={formik.values.title}
                                        color="secondary"
                                        id="title"
                                        name="title"
                                        placeholder="Movie title"
                                        className="dialog-input"
                                        error={formik.touched.title && Boolean(formik.errors.title)}
                                        helperText={formik.touched.title && formik.errors.title}
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    MOVIE POSTER URL
                                    <TextField
                                        color="secondary"
                                        id="poster_path"
                                        name="poster_path"
                                        placeholder="https://"
                                        className="dialog-input"
                                        value={formik.values.poster_path}
                                        error={formik.touched.poster_path && Boolean(formik.errors.poster_path)}
                                        helperText={formik.touched.poster_path && formik.errors.poster_path}
                                        variant="outlined"
                                        onChange={formik.handleChange}
                                    />
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    GENRE
                                    <FormControl variant="outlined">
                                        <Select
                                            color="secondary"
                                            name="genres"
                                            id="genres"
                                            multiple
                                            className="dialog-input select"
                                            displayEmpty
                                            error={formik.touched.genres && Boolean(formik.errors.genres)}
                                            value={formik.values.genres}
                                            onChange={handleGenreSelect}
                                            renderValue={(selected) => {
                                                if (selected.length === 0) {
                                                    return <span>Select Genre</span>;
                                                }
                                                return selected.join(', ')
                                            }}>
                                            {movieGenres.map(genre => (
                                                <MenuItem key={genre} value={genre}>
                                                    <Checkbox checked={formik.values.genres.indexOf(genre) > -1} />
                                                    <ListItemText primary={genre} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText
                                            error={formik.touched.genres && Boolean(formik.errors.genres)}>
                                            {formik.touched.genres && formik.errors.genres}
                                        </FormHelperText>
                                    </FormControl>
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
                                                <TextField color="secondary" className="dialog-input datepicker" {...params} error={formik.touched.release_date && Boolean(formik.errors.release_date)}
                                                    helperText={formik.touched.release_date && formik.errors.release_date} />
                                            )} />
                                    </LocalizationProvider>
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    RATING
                                    <TextField
                                        color="secondary"
                                        id="vote_average"
                                        name="vote_average"
                                        placeholder="7.8"
                                        className="dialog-input"
                                        error={formik.touched.vote_average && Boolean(formik.errors.vote_average)}
                                        helperText={formik.touched.vote_average && formik.errors.vote_average}
                                        variant="outlined"
                                        value={formik.values.vote_average}
                                        onChange={formik.handleChange} />
                                </InputLabel>
                                <InputLabel className="dialog-label">
                                    RUNTIME
                                    <TextField
                                        color="secondary"
                                        id="runtime"
                                        name="runtime"
                                        placeholder="Minutes"
                                        className="dialog-input"
                                        error={formik.touched.runtime && Boolean(formik.errors.runtime)}
                                        helperText={formik.touched.runtime && formik.errors.runtime}
                                        variant="outlined"
                                        value={formik.values.runtime}
                                        onChange={formik.handleChange}
                                    />
                                </InputLabel>
                            </div>
                            <InputLabel className="dialog-label textarea">
                                OVERVIEW
                                <TextField
                                    color="secondary"
                                    id="overview"
                                    name="overview"
                                    placeholder="Movie description"
                                    className="dialog-input"
                                    error={formik.touched.overview && Boolean(formik.errors.overview)}
                                    helperText={formik.touched.overview && formik.errors.overview}
                                    variant="outlined"
                                    multiline
                                    rows={7}
                                    value={formik.values.overview}
                                    onChange={formik.handleChange}
                                />
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
            </Dialog >
        </>
    )
};

export default AddEditDialog;