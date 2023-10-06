import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const SecondaryColorButton = styled(Button)(({ theme }) => ({
    color: "#36B64B",
    backgroundColor: "white",
    '&:hover': {
        backgroundColor: "white",
        borderColor: "#36B64B"
    },
    borderColor: "#36B64B"
}));

export default function SecondaryButton(props) {
    const { children } = props
    return (
        <SecondaryColorButton disableElevation variant="outlined"  {...props}>{children}</SecondaryColorButton>
    );
}