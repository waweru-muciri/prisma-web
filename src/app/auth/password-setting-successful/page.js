"use client"

import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Paper
} from '@mui/material';
import PrimaryButton from '@/app/components/PrimaryButton';


function PasswordSettingSuccessful({ }) {


    return (
        <Paper elevation={3} sx={{ p: 10, pt: 10, pb: 10, borderRadius: 10 }}>
            <Grid container direction="column" justifyContent="center" alignItems={"center"} spacing={2}>
                <Grid item lg={2} direction={"column"} alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Box sx={{ mb: 2, textAlign: "center" }}>
                            <Typography variant="subtitle1">La configuración de tu contraseña ha sido exitosa</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{pt: 10}}>
                        <PrimaryButton fullWidth type="submit" variant="contained">
                            Continuar
                        </PrimaryButton>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default PasswordSettingSuccessful;
