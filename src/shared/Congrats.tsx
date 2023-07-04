import { FC } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

import CongratsImg from 'src/images/resetPassImages/Congrats.png';
import { useAppDispatch } from 'src/redux/hooks';
import { clearAllResetData } from 'src/redux/slices/resetPass';

type CongratsProps = { title: string; bodyText: string; buttonText: string; onClose: VoidFunction };

export const Congrats: FC<CongratsProps> = ({ title, bodyText, buttonText, onClose }) => {
    const dispatch = useAppDispatch();
    const handleSuccessButton = () => {
        dispatch(clearAllResetData());
        onClose();
    };

    return (
        <Stack spacing={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
                component="img"
                src={CongratsImg}
                alt="congrats"
                sx={{
                    ml: '14px',
                    width: '188px',
                    height: '196px',
                }}
            />
            <Stack spacing={2} sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Typography variant="subtitle2Semibold">{title}</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '78%',
                    }}
                >
                    <Typography variant="descriptionRegular" sx={{ textAlign: 'center' }}>
                        {bodyText}
                    </Typography>
                </Box>
            </Stack>
            <Button fullWidth={true} variant="primary" onClick={handleSuccessButton}>
                {buttonText}
            </Button>
        </Stack>
    );
};
