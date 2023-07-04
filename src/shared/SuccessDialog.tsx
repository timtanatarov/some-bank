import { FC } from 'react';
import { Box, Typography, IconButton, Dialog } from '@mui/material';

import CongratsImg from 'src/images/resetPassImages/Congrats.png';

import { colors } from 'src/theme';

import { CloseIcon } from './icons/Close';

type SuccessDialogProps = {
    isOpen: boolean;
    title: string;
    onClose: VoidFunction;
};

export const SuccessDialog: FC<SuccessDialogProps> = ({ isOpen, title, onClose }) => {
    return (
        <Dialog
            open={isOpen}
            maxWidth={false}
            onClose={onClose}
            sx={{
                '& .MuiDialog-container': { background: colors.background },
                zIndex: 1000000,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    rowGap: '32px',
                    width: { tablet: '416px' },
                    height: { tablet: '380px', mobile: '384px' },
                    zIndex: '1000',
                    background: colors.neutral0,
                    borderRadius: '4px',
                    py: '60px',
                    px: '37px',
                }}
            >
                <IconButton
                    sx={{ position: 'absolute', top: '16px', right: '16px', color: colors.primary }}
                    onClick={onClose}
                    disableRipple={true}
                >
                    <CloseIcon />
                </IconButton>
                <Box
                    component="img"
                    src={CongratsImg}
                    alt="congrats"
                    sx={{
                        ml: '14px',
                        width: '168px',
                        height: '176px',
                    }}
                />
                <Typography variant="subtitle2Semibold" sx={{ lineHeight: '30px', textAlign: 'center' }}>
                    {title}
                </Typography>
            </Box>
        </Dialog>
    );
};
