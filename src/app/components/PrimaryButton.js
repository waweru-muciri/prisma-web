import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const PrimaryColorButton = styled(Button)(({ theme }) => ({
    color: "#FDFBFF",
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.main,
    textTransform: "none",
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    },
}));

export default function PrimaryButton(props) {
    const { children } = props
    return (
        <PrimaryColorButton disableElevation  {...props}>{children}</PrimaryColorButton>
    );
}