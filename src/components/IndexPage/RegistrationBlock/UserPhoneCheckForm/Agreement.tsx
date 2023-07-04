import { FC, useEffect, useRef, useState, Suspense } from 'react';

import { Dialog, Box, Button, DialogContent, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';

type AgreementProps = {
    linkText: string;
    defaultFontSize?: boolean;
    children?: React.ReactNode;
};

export const Agreement: FC<AgreementProps> = ({ linkText, children, defaultFontSize }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isStartVisible, setIsStartVisible] = useState(true);
    const [isEndVisible, setIsEndVisible] = useState(true);
    const [isDialogLoaded, setIsDialogLoaded] = useState(false);
    const dialogRef = useRef(null);
    const startRef = useRef<HTMLElement | null>(null);
    const endRef = useRef<HTMLElement | null>(null);
    const { isMobile } = useMatchesScreen();

    const handleClose = () => {
        setIsOpen(false);
        setIsDialogLoaded(false);
    };
    const handleStartIntersect = (entries: IntersectionObserverEntry[]) => {
        setIsStartVisible(entries[0].isIntersecting);
    };

    const handleEndIntersect = (entries: IntersectionObserverEntry[]) => {
        setIsEndVisible(entries[0].isIntersecting);
    };

    useEffect(() => {
        const options = {
            root: dialogRef.current,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const startObserver = new IntersectionObserver(handleStartIntersect, options);
        const endObserver = new IntersectionObserver(handleEndIntersect, options);

        const startElem = startRef.current;
        const endElem = endRef.current;
        startElem && startObserver.observe(startElem);
        endElem && endObserver.observe(endElem);

        return () => {
            startElem && startObserver.unobserve(startElem);
            endElem && endObserver.unobserve(endElem);
        };
    }, [isDialogLoaded]);

    return (
        <>
            <Button
                variant="textButton"
                sx={{
                    display: 'inline-block',
                    textAlign: 'inherit',
                    lineHeight: 'inherit',
                    verticalAlign: 'baseline',
                    ...(!defaultFontSize ? { fontSize: 'inherit' } : {}),
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {linkText}
            </Button>

            <Dialog
                open={isOpen}
                onClose={handleClose}
                onTransitionEnd={() => {
                    isOpen && setIsDialogLoaded(true);
                }}
                sx={{
                    zIndex: 1000000,
                    overflow: 'hidden',
                    '& .MuiDialog-container': {
                        backdropFilter: 'blur(8px)',
                        p: { mobile: '139px 0px', tablet: '169px 0px', desktop: '97px 0px 132px' },
                    },
                    '& .MuiPaper-root.MuiPaper-elevation': {
                        maxHeight: '100%',
                        margin: {
                            mobile: 'auto 16px',
                            tablet: 'auto 56px',
                            desktop: 'auto',
                        },
                    },
                }}
            >
                <Suspense>
                    <DialogContent
                        ref={dialogRef}
                        sx={{
                            position: 'relative',
                            p: { mobile: '0px 6px 0px 24px', tablet: '0px 6px 0px 40px' },
                            maxWidth: '698px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                height: { mobile: '29px', tablet: '57px' },
                                width: '100%',
                                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.18) 100%)',
                                opacity: isStartVisible ? 0 : 1,
                                pointerEvents: 'none',
                                transition: 'opacity 0.5s',
                            }}
                        />
                        <Close
                            sx={{
                                position: 'absolute',
                                top: { mobile: '16px', tablet: '24px' },
                                right: '24px',
                                cursor: 'pointer',
                                zIndex: 1,
                            }}
                            onClick={handleClose}
                        />
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: { mobile: '29px', tablet: '57px' },
                                width: '100%',
                                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.18) 100%)',
                                opacity: isEndVisible ? 0 : 1,
                                transition: 'opacity 0.5s',
                                pointerEvents: 'none',
                            }}
                        />
                        <Box
                            sx={{
                                height: '100%',
                                position: 'relative',
                                overflow: 'auto',
                                flexShrink: 1,
                            }}
                        >
                            <Box sx={{ mr: { mobile: '16px', tablet: '24px', desktop: '32px' } }}>
                                <Box
                                    ref={startRef}
                                    sx={{
                                        background: 'transparent',
                                        pointerEvents: 'none',
                                        height: '0px',
                                        width: '0px',
                                    }}
                                />
                                <Typography
                                    component="div"
                                    variant={isMobile ? 'regular14' : 'descriptionRegular'}
                                    sx={{
                                        py: {
                                            mobile: '24px',
                                            tablet: '32px',
                                        },
                                    }}
                                >
                                    {children}
                                </Typography>
                                <Box
                                    ref={endRef}
                                    sx={{
                                        background: 'transparent',
                                        pointerEvents: 'none',
                                        height: '0px',
                                        width: '0px',
                                    }}
                                />
                            </Box>
                        </Box>
                    </DialogContent>
                </Suspense>
            </Dialog>
        </>
    );
};
