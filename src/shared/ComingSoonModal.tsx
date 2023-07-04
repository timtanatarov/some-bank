import { Box, Dialog, IconButton, Paper, Stack, Typography } from '@mui/material';
import errorImg from 'src/images/routesError/errorImg.png';
import { colors } from 'src/theme';

import { CloseIcon } from './icons';

export type ComingSoonModalProps = {
    isOpen: boolean;
    onClose: VoidFunction;
};
export const ComingSoonModal = ({ isOpen, onClose }: ComingSoonModalProps) => {
    return (
        <Dialog sx={{ zIndex: 100000 }} onClose={onClose} open={isOpen}>
            <Paper
                elevation={0}
                sx={{
                    height: { tablet: '445px', mobile: 'auto' },
                    width: { tablet: '416px', mobile: 'auto' },
                    p: { tablet: '60px 37px', mobile: '60px 37px 50px' },
                    borderRadius: '4px',
                }}
            >
                <IconButton onClick={onClose} sx={{ position: 'absolute', right: '16px', top: '16px' }}>
                    <CloseIcon fontSize="medium" />
                </IconButton>
                <Stack spacing="24px" alignItems="center" justifyContent="center">
                    <Box
                        component="img"
                        src={errorImg}
                        sx={{ width: '168px', height: '176px', mb: { tablet: '0', mobile: '8px' } }}
                    />
                    <Stack
                        spacing="8px"
                        alignItems="center"
                        sx={{ textAlign: 'center', color: colors.primary, whiteSpace: 'pre' }}
                    >
                        <Typography component="div" variant="subtitle2Semibold" sx={{ mb: { tablet: '8px' } }}>
                            {`Данный раздел находится \nв стадии разработки.`}
                        </Typography>
                        <Typography component="div" variant="descriptionRegular">
                            {`Приносим свои извинения \nза доставленные неудобства.`}
                        </Typography>
                    </Stack>
                </Stack>
            </Paper>
        </Dialog>
    );
};
