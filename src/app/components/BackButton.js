"use client"

import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { IconButton, } from '@mui/material'
import { useRouter } from 'next/navigation'


function BackButton() {
    const router = useRouter()
    return (
        <IconButton onClick={() => router.back()}>
            <ChevronLeftIcon fontSize="large" />
        </IconButton>
    )
}

export default BackButton