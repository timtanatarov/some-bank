import { FC, ReactNode } from 'react';
import { Stack, Box } from '@mui/material';
import { CardBackground } from 'src/utils/getCardCover';

export type BaseCardProps = {
    size?: 'normal' | 'large';
    cardCover?: CardBackground;
    children?: ReactNode;
};

export const BaseCard: FC<BaseCardProps> = ({ size = 'normal', cardCover, children }) => {
    return (
        <Stack
            spacing={size === 'large' ? '40px' : '35px'}
            sx={{
                width: size === 'large' ? '282px' : `260px`,
                minWidth: size === 'large' ? '282px' : '260px',
                height: size === 'large' ? '180px' : '166px',
                padding: '16px',
                zIndex: '1',
                position: 'relative',
                color: '#FFFFFF',
                borderRadius: '16px',
                textShadow: '0px 2.29088px 4.73px rgba(8, 43, 69, 0.16)',
            }}
        >
            {children}
            <Box
                sx={{
                    width: size === 'large' ? '277px' : '255px',
                    height: size === 'large' ? '177px' : '163px',
                    position: 'absolute',
                    zIndex: '-2',
                    top: size === 'large' ? '-39px' : '-34px',
                    left: '2px',
                    borderRadius: '13px',
                    backgroundColor: `${cardCover?.defaultBackgroundColor}`,
                }}
            />
            <Box
                component="img"
                src={cardCover?.imgSrc}
                sx={{
                    width: size === 'large' ? '282px' : '260px',
                    height: size === 'large' ? '180px' : '166px',
                    position: 'absolute',
                    zIndex: '-1',
                    top: size === 'large' ? '-40px' : '-35px',
                    left: '0',
                }}
            />
        </Stack>
    );
};
