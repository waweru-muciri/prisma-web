import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const InfoColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.info.main,
    backgroundColor: theme.palette.background,
    '&:hover': {
        backgroundColor: theme.palette.background,
    },
    textDecoration: "underline"
}));

export default function InfoButton(props) {
    const { children } = props
    return (
        <InfoColorButton disableElevation  {...props}>{children}</InfoColorButton>
    );
}