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
import { Facebook, FacebookRounded, Google, Info } from '@mui/icons-material';
import PrimaryButton from '@/app/components/PrimaryButton';


function RecoverPassword({ }) {


    return (
        <Paper elevation={3} sx={{ p: 5, pt: 10, pb: 10, borderRadius: 10 }}>
            <Grid container direction="column" justifyContent="center" alignItems={"center"} spacing={2}>
                <Grid item xs={12} direction={"column"} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Box sx={{ mb: 2, textAlign: "center" }}>
                            <Typography variant="subtitle1">Recuperar contraseña</Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={{ width: '100%' }}>
                        <Box sx={{ mb: 2, textAlign: "center" }}>
                            <Typography variant="body2">Ingresa tu dirección de correo electrónico</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container alignItems="center" spacing={4} direction="column" justifyContent={"center"}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            size='small'
                                            variant="outlined"
                                            id="email"
                                            type="email"
                                            name="email"
                                            label="E-mail"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            InputLabelProps={{ shrink: true }}
                                            error={errors.email && touched.email}
                                            helperText={touched.email && errors.email}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Box item sx={{ width: "60%", margin: "auto", mb: 2, mt: 2, textAlign: "center", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                            <Info />
                                            <Typography variant="body2">Te enviaremos un código de confirmación al correo registrado</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item sx={{ width: '60%' }}>
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
        </Paper >
    );
};

export default RecoverPassword;
