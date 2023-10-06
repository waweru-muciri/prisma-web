import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CancelColorButton = styled(Button)(({ theme }) => ({
    color: "#E72D2D",
    backgroundColor: "inherit",
    '&:hover': {
        backgroundColor: "inherit",
    },
}));

export default function CancelButton(props) {
    const { children } = props
    return (
        <CancelColorButton disableElevation  {...props}>{children}</CancelColorButton>
    );
}