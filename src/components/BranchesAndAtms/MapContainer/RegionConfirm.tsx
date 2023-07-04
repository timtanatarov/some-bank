import { Box, Button, Stack, Typography } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { LocationIcon } from 'src/shared/icons';

type RegionConfirmProps = {
    city?: string;
    isModalOpen?: boolean;
    onOpen?: VoidFunction;
    onConfirm?: VoidFunction;
    onDeny?: VoidFunction;
};

const LocationTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'transparent',
    },
}));

export const RegionConfirm = ({ city, isModalOpen, onOpen, onConfirm, onDeny }: RegionConfirmProps) => {
    return (
        <Box sx={{ display: 'flex', justifyItems: 'center' }}>
            <LocationTooltip
                open={isModalOpen}
                title={
                    <Box
                        sx={{
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '-10px',
                                left: '0',
                                borderWidth: '10px',
                                borderStyle: 'solid',
                                borderColor: 'transparent transparent transparent #fff',
                            }}
                        />
                        <Stack
                            spacing={2}
                            sx={{
                                width: '240px',
                                background: '#fff',
                                color: 'black',
                                padding: '16px',
                                borderRadius: '4px',
                            }}
                        >
                            <Typography variant="descriptionSemiBold">Ваш регион {city}?</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Button variant="textButton" sx={{ mr: 3 }} onClick={onDeny}>
                                    Нет, изменить
                                </Button>
                                <Button variant="primary" onClick={onConfirm}>
                                    Да
                                </Button>
                            </Box>
                        </Stack>
                    </Box>
                }
                placement="bottom-start"
            >
                <Button
                    variant="textButton"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#fff',
                    }}
                    onClick={onOpen}
                >
                    {city && <LocationIcon sx={{ '&:hover': { color: '#4F9F57' }, mr: 1 }} />}
                    {city}
                </Button>
            </LocationTooltip>
        </Box>
    );
};
