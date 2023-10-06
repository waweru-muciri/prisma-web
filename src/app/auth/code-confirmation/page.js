"use client"

import React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Divider,
    TextField,
    Grid,
    Typography,
    Paper
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import PrimaryButton from '@/app/components/PrimaryButton';


function CodeConfirmation({ }) {


    return (
        <Paper elevation={3} sx={{ p: 5, pt: 10, pb: 10, borderRadius: 10 }}>
            <Grid container direction="column" justifyContent="center" alignItems={"center"} spacing={2}>
                <Grid item xs={12} direction={"column"} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Box sx={{ mb: 2, textAlign: "center" }}>
                            <Typography variant="subtitle1">Confirmación de código</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ mb: 2, textAlign: "center" }}>
                            <Typography variant="body2">Ingresa el codigo que te llego al correo</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <Formik
                        initialValues={{
                            code: '',
                        }}
                        validationSchema={Yup.object().shape({
                            code: Yup.string().max(255).required('Code is required'),
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container alignItems="center" spacing={4} direction="column">
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            size='small'
                                            variant="outlined"
                                            id="code"
                                            type="text"
                                            name="code"
                                            label="Ingresar codigo de confirmación"
                                            value={values.code}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            InputLabelProps={{ shrink: true }}
                                            error={errors.code && touched.code}
                                            helperText={touched.code && errors.code}
                                        />
                                    </Grid>
                                    <Grid item sx={{ width: '100%' }}>
                                        <Box sx={{ mb: 2, display: "flex", justifyContent: "center", textAlign: "center" }}>
                                            <Typography variant="body2">Enviar códogo de nuevo</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item sx={{ width: '100%' }}>
                                        <PrimaryButton fullWidth type="submit" variant="contained" disabled={isSubmitting}>
                                            Enviar código
                                        </PrimaryButton>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CodeConfirmation;
