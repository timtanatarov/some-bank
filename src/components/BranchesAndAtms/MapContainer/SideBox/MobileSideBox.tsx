import { SwipeableDrawer, Box } from '@mui/material';

type MobileSideBoxProps = {
    isFiltersVisible: boolean;
    children: JSX.Element | false;
    isOpen: boolean;
    onToggleOpen: VoidFunction;
};

export const MobileSideBox = ({ children, isFiltersVisible, isOpen, onToggleOpen }: MobileSideBoxProps) => {
    return (
        <SwipeableDrawer
            anchor="left"
            open={isOpen}
            onClose={onToggleOpen}
            onOpen={onToggleOpen}
            disableRestoreFocus={true}
            disableAutoFocus={true}
            sx={{
                width: '100%',
                minWidth: '280px',
                height: '100vh',
                position: 'absolute',
                zIndex: isFiltersVisible ? '11' : '5',
                pointerEvents: 'auto',
                display: 'flex',
                flexDirection: 'column',
                '.MuiDrawer-paper': {
                    width: '100%',
                    padding: {
                        tablet: `${isFiltersVisible ? '196' : '216'}px 0 60px 0`,
                        mobile: `${isFiltersVisible ? '156' : '176'}px 0 16px 0`,
                    },
                },
                '.MuiBackdrop-root': {
                    backgroundColor: 'transparent',
                },
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                    whiteSpace: 'nowrap',
                }}
            >
                {children}
            </Box>
        </SwipeableDrawer>
    );
};
