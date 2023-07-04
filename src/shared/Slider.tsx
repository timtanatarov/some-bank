import { useEffect, useRef, useState, useMemo, memo } from 'react';

import { Stack, IconButton, Box, useMediaQuery, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { colors } from 'src/theme';
import { SwitchDots } from 'src/shared/SwitchDots';
import { isTouchScreen } from 'src/constants';

export type SliderProps = {
    spacing?: number;
    children: React.ReactNode | React.ReactNode[];
};

export const Slider = memo(({ children, spacing = 16 }: SliderProps) => {
    const theme = useTheme();
    const isLaptopOrDesktopSize = useMediaQuery(theme.breakpoints.up('laptop'));
    const [pageStep, setPageStep] = useState(260 + spacing);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchPosition, setTouchPosition] = useState(0);
    const [isLastElemVisible, setIsLastElemVisible] = useState(false);
    const lastElemRef = useRef<HTMLElement | null>(null);
    const observedAreaRef = useRef<HTMLElement | null>(null);

    const offset = -currentIndex * pageStep;

    const cards = useMemo(
        () =>
            (Array.isArray(children) ? children : [children]).map((item, index, array) => (
                <Box
                    sx={{ height: 'auto', width: 'fit-conent' }}
                    key={index}
                    ref={index === array.length - 1 ? lastElemRef : undefined}
                >
                    {item}
                </Box>
            )),
        [children]
    );

    const pages = cards.length;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
        setIsLastElemVisible(entries[0].isIntersecting);
    };

    const lastElem = lastElemRef.current;

    useEffect(() => {
        const options = {
            root: observedAreaRef.current,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(handleIntersect, options);
        lastElem && observer.observe(lastElem);

        return () => {
            lastElem && observer.unobserve(lastElem);
        };
    }, [lastElem]);

    useEffect(() => {
        lastElem && setPageStep(lastElem.clientWidth + spacing);
    }, [lastElem, spacing]);

    const handleSwitchDots = (checkedRadioIndex: number) => {
        setCurrentIndex(checkedRadioIndex);
    };

    const handleLeft = () => {
        setCurrentIndex(currentIndex - 1);
    };

    const handleRight = () => {
        setCurrentIndex(currentIndex + 1);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchPosition(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!touchPosition) return;

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10 && currentIndex < pages - 1 && !isLastElemVisible) {
            setCurrentIndex(currentIndex + 1);
        }

        if (direction < -10 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }

        setTouchPosition(0);
    };

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Box ref={observedAreaRef} sx={{ position: 'relative' }}>
                <Stack
                    direction="row"
                    spacing={`${spacing}px`}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    sx={{
                        position: 'relative',
                        ml: {
                            tablet: '36px',
                            mobile: '24px',
                        },
                        transform: `translateX(${offset}px)`,
                        transition: 'transform 0.5s',
                    }}
                >
                    {cards}
                </Stack>
                {currentIndex > 0 && (isLaptopOrDesktopSize || !isTouchScreen) && (
                    <IconButton
                        onClick={handleLeft}
                        sx={{
                            width: '24px',
                            height: '24px',
                            background: colors.neutral0,
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '50%',
                            right: 'auto',
                            left: '28px',
                            transform: 'translate(-50%, -50%)',
                            '&:hover': {
                                backgroundColor: colors.neutral0,
                            },
                        }}
                    >
                        <ChevronLeftIcon fontSize="small" />
                    </IconButton>
                )}
                {!isLastElemVisible && currentIndex < pages - 1 && (isLaptopOrDesktopSize || !isTouchScreen) && (
                    <IconButton
                        onClick={handleRight}
                        sx={{
                            width: '24px',
                            height: '24px',
                            backgroundColor: colors.neutral0,
                            borderRadius: '50%',
                            top: '50%',
                            right: '0',
                            left: 'auto',
                            transform: 'translate(-50%, -50%)',
                            position: 'absolute',
                            '&:hover': {
                                backgroundColor: colors.neutral0,
                            },
                        }}
                    >
                        <ChevronRightIcon fontSize="small" />
                    </IconButton>
                )}
            </Box>
            <Box
                sx={{
                    margin: '24px 0 0 36px',
                    ...(pages < 2 && {
                        opacity: 0,
                        pointerEvents: 'none',
                    }),
                }}
            >
                <SwitchDots itemsQuantity={pages} currentIndex={currentIndex} switchHandler={handleSwitchDots} />
            </Box>
        </Box>
    );
});
