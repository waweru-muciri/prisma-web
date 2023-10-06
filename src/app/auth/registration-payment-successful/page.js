"use client"

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import PrimaryButton from '@/app/components/PrimaryButton';


function RegistrationAndPaymentSuccessful({ }) {


    return (
        <Paper elevation={3} sx={{ p: 10, pt: 10, pb: 10, borderRadius: 10 }}>
            <Grid container direction="column" justifyContent="center" alignItems={"center"} spacing={2}>
                <Grid item lg={2} direction={"column"} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Box sx={{ mb: 2, textAlign: "center" }}>
                            <Typography variant="subtitle1">Su registro y su pago han sido exitosos</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ pt: 10 }}>
                        <PrimaryButton fullWidth type="submit" variant="contained">
                            Continuar
                        </PrimaryButton>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default RegistrationAndPaymentSuccessful;
