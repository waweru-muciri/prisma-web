"use client"

import React from 'react';
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


function CreateNewPassword({ }) {


    return (
        <Paper elevation={3} sx={{ p: 2, pt: 8, pb: 8, borderRadius: 10 }}>
            <Grid container direction="column" justifyContent="center" alignItems={"center"} spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Box sx={{ mb: 2, textAlign: "center" }}>
                            <Typography variant="subtitle1">Crea una contraseña nueva</Typography>
                        </Box>
                    </Grid>
                    <Grid item sx={{ width: '100%' }}>
                        <Box sx={{ mb: 2, textAlign: "center" }}>
                            <Typography variant="body2">Ingresa una contraseña con minimo 6 digitos</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <Formik
                        initialValues={{
                            password: '',
                            confirmation_password: '',
                        }}
                        validationSchema={Yup.object().shape({
                            password: Yup.string().min(6, "Minimo 6 caracteres").required('New Password is required'),
                            confirmation_password: Yup.string().min(6, "Minimo 6 caracteres").required('Confirmation Password is required')
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container alignItems="center" spacing={4} direction="column">
                                    <Grid item>
                                        <TextField
                                            size='small'
                                            variant="outlined"
                                            id="password"
                                            type="password"
                                            name="password"
                                            label="Ingresar contraseña nueva"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            InputLabelProps={{ shrink: true }}
                                            error={errors.password && touched.password}
                                            helperText={touched.password && errors.password}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            size='small'
                                            type="password"
                                            variant="outlined"
                                            name="confirmation_password"
                                            id="confirmation_password"
                                            label="Confirmar contraseña nueva*"
                                            value={values.confirmation_password}
                                            onChange={handleChange}
                                            InputLabelProps={{ shrink: true }}
                                            onBlur={handleBlur}
                                            error={errors.confirmation_password && touched.confirmation_password}
                                            helperText={touched.confirmation_password && errors.confirmation_password}
                                        />
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
                </Grid>
            </Grid>
        </Paper>
    );
};

export default CreateNewPassword;
