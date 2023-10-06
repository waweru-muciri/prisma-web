import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const TextColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textTransform: "none",
    backgroundColor: theme.palette.background,
    '&:hover': {
        backgroundColor: theme.palette.background,
    },
}));

export default function TextButton(props) {
    const { children } = props
    return (
        <TextColorButton disableElevation  {...props}>{children}</TextColorButton>
    );
}