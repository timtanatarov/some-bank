import { useTheme } from '@mui/material/styles';
import { Options, useMediaQuery } from '@mui/material';

const options: Options = {
    noSsr: true,
};

export const useMatchesScreen = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet'), options);
    const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'laptop'), options);
    const isLaptop = useMediaQuery(theme.breakpoints.between('laptop', 'desktop'), options);
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'), options);

    return { isMobile, isTablet, isLaptop, isDesktop };
};
