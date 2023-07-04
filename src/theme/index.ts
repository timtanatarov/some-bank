import { createTheme } from '@mui/material';
import React from 'react';

import { colors } from './coreStyles';
export { colors } from './coreStyles';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        logo: React.CSSProperties;
        subtitle4: React.CSSProperties;
        subtitle3: React.CSSProperties;
        subtitle2: React.CSSProperties;
        strong1: React.CSSProperties;
        strong2: React.CSSProperties;
        strong3_underline: React.CSSProperties;
        body1: React.CSSProperties;
        body2: React.CSSProperties;
        emphasis2: React.CSSProperties;
        caption1: React.CSSProperties;
        h2New: React.CSSProperties;
        subtitle2New: React.CSSProperties;
        subtitle2Semibold: React.CSSProperties;
        descriptionRegular: React.CSSProperties;
        descriptionSemiBold: React.CSSProperties;
        regular14: React.CSSProperties;
        regular14_20: React.CSSProperties;
        bold24: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        logo?: React.CSSProperties;
        subtitle4?: React.CSSProperties;
        subtitle3?: React.CSSProperties;
        subtitle2?: React.CSSProperties;
        strong1?: React.CSSProperties;
        strong2?: React.CSSProperties;
        strong3_underline?: React.CSSProperties;
        body1?: React.CSSProperties;
        body2?: React.CSSProperties;
        emphasis2?: React.CSSProperties;
        caption1?: React.CSSProperties;
        h2New?: React.CSSProperties;
        subtitle2New?: React.CSSProperties;
        subtitle2Semibold?: React.CSSProperties;
        descriptionRegular?: React.CSSProperties;
        descriptionSemiBold?: React.CSSProperties;
        regular14?: React.CSSProperties;
        regular14_20?: React.CSSProperties;
        bold24?: React.CSSProperties;
        labelRegular12?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        logo: true;
        subtitle4: true;
        subtitle3: true;
        strong1: true;
        strong2: true;
        strong3_underline: true;
        body1: true;
        body2: true;
        emphasis2: true;
        caption1: true;
        h2New: true;
        subtitle2New: true;
        subtitle2Semibold: true;
        descriptionRegular: true;
        descriptionSemiBold: true;
        regular14: true;
        regular14_20: true;
        bold24: true;
        labelRegular12: true;
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsVariantOverrides {
        custom: true;
        darkDesignFilter: true;
    }
}
declare module '@mui/material/Fab' {
    interface FabPropsVariantOverrides {
        lightDesign: true;
        darkDesign: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        primary: true;
        secondary: true;
        textButton: true;
        lightDesignChip: true;
        navigation: true;
    }
    interface ButtonPropsSizeOverrides {
        wide: true;
    }
}

declare module '@mui/material/StepIcon' {
    interface StepIconPropsVariantOverrides {
        greenStepIcon: true;
    }
}

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false;
        sm: false;
        md: false;
        lg: false;
        xl: false;

        mobile: true;
        tablet: true;
        laptop: true;
        desktop: true;
    }
}

const globalTheme = createTheme({
    palette: {
        primary: {
            main: colors.secondary200,
            light: colors.neutral100,
            dark: colors.secondary300,
            contrastText: colors.primary,
        },
        secondary: {
            main: colors.neutral0,
            light: 'rgba(52, 168, 83, 0.3)',
            dark: '#4F9F57',
            contrastText: colors.primary,
        },
        text: {
            primary: colors.primary,
            disabled: colors.neutral600,
        },
        grey: {
            500: colors.neutral400,
        },
    },
});

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        },
    },
    typography: {
        fontFamily: 'SF Pro Text',
        logo: {
            fontFamily: 'Futura',
            fontSize: '36px',
            lineHeight: '36px',
            letterSpacing: '0.02em',
        },
        h2: {
            fontFamily: 'SF Pro Display',
            fontSize: '48px',
            lineHeight: '72px',
            fontWeight: '900',
        },
        h3: {
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '36px',
            lineHeight: '48px',
        },
        h4: {
            fontFamily: 'SF Pro Display',
            fontSize: '32px',
            lineHeight: '48px',
            fontWeight: '700',
        },
        h5: {
            fontFamily: 'SF Pro Display',
            fontSize: '24px',
            lineHeight: '36px',
            fontWeight: '700',
        },
        caption1: {
            fontSize: '12px',
            lineHeight: '16px',
            fontWeight: '400',
            color: '#212529',
        },
        strong1: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '700',
            color: '#212529',
        },
        strong2: {
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: '700',
            color: '#212529',
        },
        subtitle4: {
            fontSize: '15px',
            lineHeight: '24px',
            fontWeight: '400',
            color: '#212529',
        },
        subtitle3: {
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: '400',
            color: '#212529',
        },
        subtitle2: {
            fontSize: '20px',
            lineHeight: '28px',
            fontWeight: '400',
        },
        subtitle2New: {
            fontFamily: 'SF Pro Text',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '32px',
        },
        subtitle2Semibold: {
            fontFamily: 'SF Pro Text',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '32px',
        },
        h2New: {
            fontFamily: 'SF Pro Display',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '48px',
            lineHeight: '145%',
        },
        button: {
            fontSize: '16px',
            fontFamily: 'SF Pro Text',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '24px',
            textAlign: 'center',
            letterSpacing: 'normal',
        },
        descriptionRegular: {
            fontFamily: 'SF Pro Text',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
        },
        descriptionSemiBold: {
            fontFamily: 'SF Pro Text',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '24px',
        },
        regular14: {
            fontFamily: 'SF Pro Text',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '20px',
        },
        regular14_20: {
            fontFamily: 'SF Pro Text',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '20px',
        },
        bold24: {
            fontFamily: 'SF Pro Display',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '32px',
        },
        labelRegular12: {
            fontFamily: 'SF Pro Text',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '16px',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                },
            },
        },
        MuiChip: {
            variants: [
                {
                    props: { variant: 'custom' },
                    style: {
                        display: 'inline-flex',
                        height: '40px',
                        background: colors.neutral100,
                        padding: '8px 12px',
                        border: 'none',
                        borderRadius: '4px',
                        fontFamily: 'SF Pro Text',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: colors.neutral600,

                        '> span': {
                            padding: 0,
                            display: 'inline-block',
                            height: '20px',
                        },

                        '&:hover': {
                            color: colors.secondary600,
                            cursor: 'pointer',
                        },
                    },
                },
                {
                    props: { variant: 'darkDesignFilter' },
                    style: {
                        display: 'inline-flex',
                        height: '40px',
                        background: colors.neutral100,
                        padding: '8px 12px',
                        border: 'none',
                        borderRadius: '4px',
                        fontFamily: 'SF Pro Text',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: colors.neutral600,

                        '> span': {
                            padding: 0,
                            display: 'inline-block',
                            height: '24px',
                        },

                        '&:hover': {
                            backgroundColor: '#EEEEEE',
                            cursor: 'pointer',
                        },

                        '& .MuiChip-icon': {
                            color: colors.primary,
                            margin: '0px 8px 0px 0px',
                        },
                    },
                },
            ],
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: '#212529',
                    '&.MuiLink-underlineAlways': {
                        textDecoration: 'underline',
                        fontWeight: 400,
                        fontSize: 14,
                        lineHeight: '20px',
                    },
                    '&.MuiLink-underlineNone': {
                        fontFamily: 'SF Pro Display, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        letterSpacing: 'normal',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: colors.neutral600,
                    '&.Mui-focused': {
                        color: colors.neutral600,
                    },
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#FFD600',
                    },
                },
            },
        },
        MuiTab: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiToggleButton: {
            styleOverrides: {
                root: {
                    color: '#FFF',
                    fontWeight: '400',
                    fontSize: '1rem',
                    textTransform: 'capitalize',

                    '&.Mui-selected': {
                        backgroundColor: '#FFD600',
                        color: '#212529',

                        '&:hover': {
                            backgroundColor: globalTheme.palette.primary.light,
                        },
                    },
                },
            },
        },
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
            variants: [
                {
                    props: { size: 'wide' },
                    style: {
                        width: '342px',
                    },
                },
                {
                    props: { variant: 'primary' },
                    style: {
                        padding: '12px 24px',
                        textTransform: 'none',
                        color: globalTheme.palette.primary.contrastText,
                        backgroundColor: globalTheme.palette.primary.main,

                        '&:hover': {
                            backgroundColor: globalTheme.palette.primary.dark,
                        },

                        '&:active': {
                            boxShadow: `inset 4px 4px 20px ${globalTheme.palette.secondary.light}`,
                        },
                    },
                },
                {
                    props: { variant: 'primary', disabled: true },
                    style: {
                        backgroundColor: globalTheme.palette.primary.light,
                        color: globalTheme.palette.text.disabled + '!important',
                    },
                },
                {
                    props: { variant: 'secondary' },
                    style: {
                        padding: '11px 23px',
                        textTransform: 'none',
                        color: globalTheme.palette.secondary.contrastText,
                        backgroundColor: globalTheme.palette.secondary.main,
                        border: `1px solid ${globalTheme.palette.primary.main}`,

                        '&:hover': {
                            borderColor: globalTheme.palette.primary.dark,
                            backgroundColor: globalTheme.palette.secondary.main,
                        },

                        '&:active': {
                            borderColor: globalTheme.palette.secondary.dark,
                            boxShadow: `inset 4px 4px 20px ${globalTheme.palette.secondary.light}`,
                        },
                    },
                },
                {
                    props: { variant: 'secondary', disabled: true },
                    style: {
                        color: `${globalTheme.palette.text.disabled}!important`,
                        backgroundColor: globalTheme.palette.secondary.main,
                        border: `1px solid ${globalTheme.palette.grey[500]}`,
                    },
                },
                {
                    props: { variant: 'textButton' },
                    style: {
                        color: globalTheme.palette.primary.contrastText,
                        background: 'transparent',
                        textDecoration: 'underline',
                        textTransform: 'none',
                        padding: '0',

                        '&:hover': {
                            color: globalTheme.palette.secondary.dark,
                            background: 'transparent',
                            textDecoration: 'underline',
                        },
                    },
                },
                {
                    props: { variant: 'textButton', disabled: true },
                    style: {
                        color: globalTheme.palette.text.disabled + '!important',
                    },
                },
                {
                    props: { variant: 'lightDesignChip' },
                    style: {
                        textTransform: 'none',
                        marginLeft: '20px',
                        minHeight: '36px',
                        background: 'white',
                        border: '1px solid',
                        borderColor: 'white',
                        borderRadius: '18px',
                        padding: '6px 15px',
                        boxShadow: '0px 5px 10px rgba(4, 67, 101, 0.08), 0px 2px 6px rgba(130, 171, 188, 0.08)',
                        fontSize: '16px',
                        lineHeight: '24px',

                        '&:hover': {
                            cursor: 'pointer',
                            background: '#f5f5f5',
                            borderColor: '#eeeeee',
                        },

                        '&:active': {
                            background: '#FFF9C4',
                            borderColor: '#FFF9C4',
                        },
                    },
                },
                {
                    props: { variant: 'navigation' },
                    style: {
                        color: globalTheme.palette.primary.contrastText,
                        background: 'transparent',
                        textDecoration: 'none',
                        textTransform: 'none',
                        padding: '0',
                        '&:hover': {
                            background: 'transparent',
                        },
                    },
                },
            ],
        },
        MuiFab: {
            defaultProps: {
                disableRipple: true,
                disableFocusRipple: true,
                size: 'small',
            },
            variants: [
                {
                    props: { variant: 'lightDesign' },
                    style: {
                        background: 'white',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
                        '&:hover': {
                            background: 'white',
                        },
                        '&:active': {
                            background: 'lightgray',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.12)',
                        },
                    },
                },
                {
                    props: { variant: 'darkDesign' },
                    style: {
                        height: '48px',
                        width: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: globalTheme.palette.secondary.main,
                        background: globalTheme.palette.primary.contrastText,
                        borderRadius: '4px',
                        boxShadow: 'none',

                        '&:hover': {
                            background: globalTheme.palette.primary.contrastText,
                            boxShadow: 'none',
                        },
                        '&:active': {
                            background: globalTheme.palette.primary.contrastText,
                            boxShadow: 'none',
                        },
                    },
                },
                {
                    props: { variant: 'darkDesign', disabled: true },
                    style: {
                        background: globalTheme.palette.text.disabled + '!important',
                        color: globalTheme.palette.grey[500] + '!important',
                    },
                },
            ],
        },
    },
});
