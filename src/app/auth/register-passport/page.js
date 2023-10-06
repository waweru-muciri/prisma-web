"use client"

import React from 'react';
import {
    Box,
    TextField,
    InputLabel,
    MenuItem,
    FormControl,
    Grid,
    Typography,
    Paper,
    Select
} from '@mui/material';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import PrimaryButton from '@/app/components/PrimaryButton';


function RegisterPassport({ }) {


    return (
        <Paper elevation={3} sx={{ p: 4, pt: 6, borderRadius: 10, }}>
            <Grid container direction="column" justifyContent="center" alignItems={"center"} spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Box sx={{ mb: 2, textAlign: "center" }}>
                            <Typography variant="subtitle1">Registro pasaporte</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <Formik
                        initialValues={{
                            first_name: '',
                            last_name: '',
                            document_selection: '',
                            document_number: '',
                        }}
                        validationSchema={Yup.object().shape({
                            first_name: Yup.string().required('First name is required'),
                            last_name: Yup.string().required('Last name is required'),
                            document_selection: Yup.string().required('Document selectioin is required'),
                            document_number: Yup.string().required('Document number is required')
                        })}
                        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        }}
                    >
                        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                            <form noValidate onSubmit={handleSubmit}>
                                <Grid container alignItems="center" spacing={4} direction="column">
                                    <Grid item sx={{ width: '100%' }}>
                                        <TextField
                                            fullWidth
                                            size='small'
                                            variant="outlined"
                                            id="first_name"
                                            type="text"
                                            name="first_name"
                                            label="Nombre completo"
                                            value={values.first_name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            InputLabelProps={{ shrink: true }}
                                            error={errors.first_name && touched.first_name}
                                            helperText={touched.first_name && errors.first_name}
                                        />
                                    </Grid>
                                    <Grid item sx={{ width: '100%' }}>
                                        <TextField
                                            fullWidth
                                            size='small'
                                            type="text"
                                            variant="outlined"
                                            name="last_name"
                                            id="last_name"
                                            label="Apellido completo"
                                            value={values.last_name}
                                            onChange={handleChange}
                                            InputLabelProps={{ shrink: true }}
                                            onBlur={handleBlur}
                                            error={errors.last_name && touched.last_name}
                                            helperText={touched.last_name && errors.last_name}
                                        />
                                    </Grid>
                                    <Grid container item direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                        <Grid item flex={0.4}>
                                            <Box>
                                                <FormControl fullWidth>
                                                    <InputLabel id="document_selection-select-label">Selección</InputLabel>
                                                    <Select
                                                        size='small'
                                                        labelId="document_selection-select-label"
                                                        id="document_selection"
                                                        name="document_selection"
                                                        value={values.document_selection}
                                                        label="Selección"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={10}>Selección 1</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item flex={0.5}>
                                            <TextField
                                                size='small'
                                                variant="outlined"
                                                id="document_number"
                                                type="text"
                                                name="document_number"
                                                label="N° documento"
                                                value={values.document_number}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                InputLabelProps={{ shrink: true }}
                                                error={errors.document_number && touched.document_number}
                                                helperText={touched.document_number && errors.document_number}
                                            />
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
                </Grid>
            </Grid>
        </Paper>
    );
};

export default RegisterPassport;
