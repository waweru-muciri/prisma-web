"use client"

import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import PrimaryButton from '@/app/components/PrimaryButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';


function RegisterPassportDetails({ }) {


    return (
        <Box sx={{ width: 1 }}>
            <Paper elevation={3} sx={{ p: 4, pt: 6, borderRadius: 10, width: 1 }}>
                <Grid container direction="column" justifyContent="center" alignItems={"center"} spacing={2}>
                    <Grid item sx={{ width: 1 }} container alignItems="center" justifyContent="center">
                        <Grid item sx={{ width: 1 }}>
                            <Box sx={{ mb: 2, textAlign: "center" }}>
                                <Typography variant="subtitle1">Registro pasaporte</Typography>
                            </Box>
                            <Box sx={{ mb: 2, textAlign: "center" }}>
                                <Typography variant="body2">Subir foto</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ width: 1 }} container alignItems="center" justifyContent="center">
                        <Grid item sx={{ width: 1 }}>
                            <Box sx={{ mb: 2, textAlign: "center" }}>
                                <Avatar sx={{ width: 50, height: 50 }}>
                                    <PhotoCameraIcon fontSize='large' />
                                </Avatar>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item sx={{ width: '100%' }}>
                        <Formik
                            initialValues={{
                                date_of_birth: '',
                                last_name: '',
                                document_selection: '',
                                document_number: '',
                            }}
                            validationSchema={Yup.object().shape({
                                date_of_birth: Yup.string().required('First name is required'),
                                last_name: Yup.string().required('Last name is required'),
                                document_selection: Yup.string().required('Document selectioin is required'),
                                document_number: Yup.string().required('Document number is required')
                            })}
                            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                            }}
                        >
                            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                                <form noValidate onSubmit={handleSubmit}>
                                    <Grid container alignItems="stretch" spacing={4} direction="column">
                                        <Grid container item alignItems={"center"} spacing={3} direction="row">
                                            <Grid item xs>
                                                <TextField
                                                    fullWidth
                                                    size='small'
                                                    variant="outlined"
                                                    id="date_of_birth"
                                                    type="date"
                                                    name="date_of_birth"
                                                    label="Fecha de nacimiento"
                                                    value={values.date_of_birth}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    InputLabelProps={{ shrink: true }}
                                                    error={errors.date_of_birth && touched.date_of_birth}
                                                    helperText={touched.date_of_birth && errors.date_of_birth}
                                                />
                                            </Grid>
                                            <Grid item xs>
                                                <Box sx={{ minWidth: "120px" }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="gender_selection-select-label">Genero</InputLabel>
                                                        <Select
                                                            size='small'
                                                            labelId="gender_selection-select-label"
                                                            id="gender"
                                                            name="gender"
                                                            value={values.gender}
                                                            label="Genero"
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value="Male">Male</MenuItem>
                                                            <MenuItem value="Female">Female</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid container item direction={"row"} alignItems={"center"} spacing={3}>
                                            <Grid item xs>
                                                <Box sx={{ minWidth: "120px" }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="country_selection-select-label">País</InputLabel>
                                                        <Select
                                                            size='small'
                                                            labelId="country_selection-select-label"
                                                            id="country"
                                                            name="country"
                                                            value={values.country}
                                                            label="Pais"
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value={10}>Selección 1</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Grid>
                                            <Grid item xs>
                                                <Box sx={{ minWidth: "120px" }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="city_selection-select-label">Ciudad</InputLabel>
                                                        <Select
                                                            size='small'
                                                            labelId="city_selection-select-label"
                                                            id="city"
                                                            name="city"
                                                            value={values.city}
                                                            label="Ciudad"
                                                            onChange={handleChange}
                                                        >
                                                            <MenuItem value={10}>Selección 1</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid item sx={{ width: '100%' }}>
                                            <PrimaryButton fullWidth type="submit" variant="contained" disabled={isSubmitting}>
                                                Guardar
                                            </PrimaryButton>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Formik>
                    </Grid >
                </Grid >
            </Paper >
        </Box >
    );
};

export default RegisterPassportDetails;
