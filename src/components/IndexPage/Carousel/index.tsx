import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';

import { SwitchDots } from 'src/shared/SwitchDots';

import { ArrowBackIcon, ArrowForwardIcon } from 'src/shared/icons';

import { CallToAction } from './CallToAction';

type CarouselProps = {
    carouselData: {
        title: string;
        subtitle: string;
        link: string;
        image: string;
    }[];
    hasSwitchDots?: boolean;
    interval?: number;
};

export const Carousel = ({ carouselData, hasSwitchDots = false, interval = 3500 }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const { isMobile, isTablet } = useMatchesScreen();
    const isLowerThanLaptop = isMobile || isTablet;
    const carouselItemsQuantity = carouselData.length;

    const switchHandler = (checkedRadioIndex: number) => {
        setCurrentIndex(checkedRadioIndex);
    };

    useEffect(() => {
        const slideInterval = setTimeout(() => {
            const nextIndex = (currentIndex + 1) % carouselItemsQuantity;

            setCurrentIndex(nextIndex);
        }, interval);

        return () => {
            clearTimeout(slideInterval);
        };
    }, [currentIndex, interval, carouselItemsQuantity]);

    const handleForwardClick = () => setCurrentIndex((index) => (index === carouselItemsQuantity - 1 ? 0 : index + 1));
    const handleBackClick = () => setCurrentIndex((index) => (index ? index - 1 : carouselItemsQuantity - 1));

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'end',
                [theme.breakpoints.down('laptop')]: {
                    justifyContent: 'center',
                },
            }}
        >
            {!isLowerThanLaptop && (
                <IconButton
                    data-cy="slider-left-button"
                    disableRipple={true}
                    disableTouchRipple={true}
                    sx={{
                        margin: '0 24px 259px 0',
                        padding: '12px',
                        position: 'relative',
                        zIndex: 10,
                        width: 'fit-content',
                    }}
                    onClick={handleBackClick}
                >
                    <ArrowBackIcon
                        viewBox="0 0 16 28"
                        sx={{
                            height: '28px',
                            width: '16px',
                            color: 'white',
                            [theme.breakpoints.down('desktop')]: { marginLeft: '18px' },
                        }}
                    />
                </IconButton>
            )}
            <Box
                sx={{
                    position: 'relative',
                    width: '480px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    [theme.breakpoints.down('laptop')]: {
                        width: '480px',
                    },
                    [theme.breakpoints.down('tablet')]: {
                        width: '342px',
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        [theme.breakpoints.down('desktop')]: {
                            h2: {
                                fontSize: '38px',
                            },
                            h6: {
                                fontSize: '20px',
                            },
                        },
                        [theme.breakpoints.down('laptop')]: {
                            h2: {
                                fontSize: '48px',
                            },
                            h6: {
                                fontSize: '20px',
                            },
                        },
                        [theme.breakpoints.down('tablet')]: {
                            width: '342px',
                            h2: {
                                fontSize: '24px',
                            },
                        },
                    }}
                >
                    {carouselData.map((item, index) => (
                        <CallToAction
                            opacity={index === currentIndex ? 1 : 0}
                            title={item.title}
                            subtitle={item.subtitle}
                            link={item.link}
                            image={item.image}
                            key={index}
                        />
                    ))}
                </Box>

                {hasSwitchDots && (
                    <Box
                        sx={{
                            position: 'relative',
                            zIndex: 10,
                            marginBottom: '44px',
                            [theme.breakpoints.down('tablet')]: {
                                margin: 'auto',
                            },
                        }}
                    >
                        <SwitchDots
                            itemsQuantity={carouselItemsQuantity}
                            currentIndex={currentIndex}
                            switchHandler={switchHandler}
                        />
                    </Box>
                )}
                <Button
                    component={RouterLink}
                    to={carouselData[currentIndex].link}
                    variant="primary"
                    sx={{
                        zIndex: 10,
                        [theme.breakpoints.down('tablet')]: {
                            width: '165px',
                            height: '48px',
                            margin: '40px auto 60px',
                            fontSize: '16px',
                        },
                    }}
                >
                    Узнать больше
                </Button>
            </Box>
            {!isLowerThanLaptop && (
                <IconButton
                    data-cy="slider-right-button"
                    disableRipple={true}
                    disableTouchRipple={true}
                    sx={{
                        padding: '12px',
                        margin: '0 18px 259px 24px',
                        position: 'relative',
                        zIndex: 10,
                    }}
                    onClick={handleForwardClick}
                >
                    <ArrowForwardIcon viewBox="0 0 16 28" sx={{ height: '28px', width: '16px', color: 'white' }} />
                </IconButton>
            )}
        </Box>
    );
};
