import { FC } from 'react';

import { Stack, SxProps, Fab } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import { PlusSignIcon, MinusSignIcon, LocatorIcon } from 'src/shared/icons';

type MapControlsProps = {
    onZoomIn: VoidFunction;
    onZoomOut: VoidFunction;
    onUpdateLocation: VoidFunction;
    sx: SxProps;
};

export const MapControls: FC<MapControlsProps> = ({ onZoomIn, onZoomOut, onUpdateLocation, sx }) => {
    const isLowHeight = useMediaQuery('(max-height: 700px)');
    return (
        <Stack spacing={isLowHeight ? '36px' : '80px'} sx={{ ...sx, pointerEvents: 'none' }}>
            <Stack spacing="24px">
                <Fab variant="darkDesign" sx={{ pointerEvents: 'auto' }} onClick={onZoomIn}>
                    <PlusSignIcon />
                </Fab>
                <Fab variant="darkDesign" sx={{ pointerEvents: 'auto' }} onClick={onZoomOut}>
                    <MinusSignIcon />
                </Fab>
            </Stack>
            <Fab variant="darkDesign" sx={{ pointerEvents: 'auto' }} onClick={onUpdateLocation}>
                <LocatorIcon />
            </Fab>
        </Stack>
    );
};
