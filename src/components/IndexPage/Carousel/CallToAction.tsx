import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

export type CallToActionProps = {
    opacity: number;
    title: string;
    subtitle: string;
    link: string;
    image: string;
};

export const CallToAction = ({ opacity, title, subtitle, image, link }: CallToActionProps) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                maxWidth: '480px',
                height: '100%',
                color: '#FFF',
                opacity: opacity,
                position: opacity ? 'static' : 'absolute',
                bottom: '0px',
                left: 0,
                transition: 'opacity 1s',
            }}
        >
            <Box
                component="img"
                src={image}
                alt="logotype"
                sx={{
                    display: 'block',
                    marginBottom: '44px',
                    [theme.breakpoints.down('tablet')]: {
                        width: '168px',
                        height: '176px',
                        margin: '68px auto 24px',
                    },
                }}
            />
            <Typography
                data-cy="slider-title"
                variant="h2New"
                component="h2"
                sx={{
                    [theme.breakpoints.down('tablet')]: {
                        fontSize: '24px',
                        width: '260px',
                        margin: 'auto',
                        lineHeight: '32px',
                        textAlign: 'center',
                    },
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="subtitle2New"
                component="h6"
                sx={{
                    letterSpacing: 'normal',
                    margin: '16px 0 44px 0',
                    width: '378px',
                    [theme.breakpoints.down('tablet')]: {
                        width: '342px',
                        fontSize: '20px',
                        lineHeight: '32px',
                        textAlign: 'center',
                    },
                }}
            >
                {subtitle}
            </Typography>
        </Box>
    );
};
