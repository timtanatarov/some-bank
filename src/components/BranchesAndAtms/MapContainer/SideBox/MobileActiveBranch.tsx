import { Box, ClickAwayListener, styled, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import { MarkType } from 'src/redux/apis/infoService/types';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';
import { colors } from 'src/theme';

import { DetailedMarkInfo } from './DetailedMarkInfo';

type MobileActiveBranchProps = {
    isActiveMark: MarkType;
    onClickAway: VoidFunction;
};

const SWIPE_AREA_TABLET = 204;
const SWIPE_AREA_MOBILE = 180;
const Puller = styled(Box)(() => ({
    width: 40,
    height: 4,
    backgroundColor: colors.neutral400,
    borderRadius: 3,
    margin: '8px auto 40px',
}));

export const MobileActiveBranch = ({ isActiveMark, onClickAway }: MobileActiveBranchProps) => {
    const { isMobile } = useMatchesScreen();
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen((open) => !open);
    };

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <SwipeableDrawer
                anchor="bottom"
                open={open}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
                swipeAreaWidth={isMobile ? SWIPE_AREA_MOBILE : SWIPE_AREA_TABLET}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '.MuiPaper-root': {
                        overflow: 'visible',
                    },
                }}
            >
                <Box
                    onClick={toggleDrawer}
                    sx={{
                        position: 'absolute',
                        borderRadius: '4px 4px 0px 0px',
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                        backgroundColor: colors.neutral0,
                        cursor: 'pointer',
                        pointerEvents: 'all',
                        zIndex: '5',
                        top: isMobile ? -SWIPE_AREA_MOBILE : -SWIPE_AREA_TABLET,
                        height: isMobile ? SWIPE_AREA_MOBILE + '1px' : SWIPE_AREA_TABLET + '1px',
                        padding: isMobile ? '0 16px 36px' : '8px 60px 60px',
                    }}
                >
                    <Puller onClick={toggleDrawer} />
                    <Box sx={{ overflow: 'hidden', height: open ? 'auto' : '92px' }}>
                        <DetailedMarkInfo info={isActiveMark} />
                    </Box>
                </Box>
                <Box sx={{ height: isMobile ? '452px' : '372px' }} />
            </SwipeableDrawer>
        </ClickAwayListener>
    );
};
