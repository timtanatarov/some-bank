import { Button, ButtonProps } from '@mui/material';
import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const BackArrowButton = ({ ...props }: ButtonProps) => {
    return (
        <Button variant="navigation" startIcon={<ArrowBackIosIcon sx={{ color: '#9E9E9E' }} />} {...props}>
            Назад
        </Button>
    );
};
