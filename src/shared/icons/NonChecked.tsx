import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { colors } from 'src/theme';

export const NonCheckedIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect
                    x="3.85537"
                    y="3.85"
                    width="16.332"
                    height="16.3"
                    rx="3.15"
                    stroke={colors.neutral600}
                    strokeWidth="1.7"
                />
            </svg>
        </SvgIcon>
    );
};
