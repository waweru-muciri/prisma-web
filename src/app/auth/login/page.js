"use client"

import React from 'react';
import Link from 'next/link';

import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  TextField,
  Grid,
  Typography,
  Paper,
  Stack
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import PrimaryButton from '@/app/components/PrimaryButton';
import TextButton from '@/app/components/TextButton';
import InfoButton from '@/app/components/InfoButton';


function Login({ }) {

  return (
    <Paper elevation={3} sx={{ p: 4, borderRadius: 10 }}>
      <Grid container direction="column" justifyContent="center" alignItems={"center"} spacing={2}>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Login</Typography>
          </Box>
        </Grid>
        <Grid item>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            }}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container alignItems="center" spacing={3} direction="column" xs>
                  <Grid item xs>
                    <TextField
                      size='small'
                      variant="outlined"
                      id="email"
                      type="email"
                      name="email"
                      label="E-mail"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email && touched.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item sx={{ flexGrow: 1 }} xs={12}>
                    <TextField
                      size='small'
                      type="password"
                      variant="outlined"
                      name="password"
                      id="password"
                      label="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.password && touched.password}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>
                  <Grid item container direction="row" justifyContent="space-between">
                    <Grid item>
                      <Link style={{ color: "#2DABB1", textDecoration: "none" }} href="/auth/forgot-password">Forgot password?</Link>
                    </Grid>
                    <Grid item container direction="row" spacing={1} justifyContent="space-evenly" xs>
                      <Grid item xs>
                        <Typography variant="body2">No Account?</Typography>
                      </Grid>
                      <Grid item xs>
                        <Link style={{ color: "#2DABB1", textDecoration: "underline" }} href="/auth/sign-up">Sign up</Link>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Stack direction="row" justifyContent="center" >
                      <Typography variant='body2' sx={{ color: "text.secondary", display: "inline" }}>
                        By continuing, you agree to our
                      </Typography>
                      <Link href={"/terms-of-service"} style={{ color: "#54401E", textDecoration: "underline" }}>Terms of Service</Link>
                      <Typography variant='body2' sx={{ color: "text.secondary" }}>
                        and our
                      </Typography>
                      <Link href={"/privacy-policy"} style={{ color: "#54401E", textDecoration: "underline" }}>Privacy Policy</Link>
                    </Stack>
                  </Grid>
                  <Grid item sx={{ width: '100%' }}>
                    <PrimaryButton fullWidth type="submit" variant="contained" disabled={isSubmitting}>
                      Login
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

export default Login;
