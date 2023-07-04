import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { colors } from 'src/theme';

export const BulletIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon {...props}>
            <circle cx="12" cy="12" r="4" fill={colors.neutral600} />
        </SvgIcon>
    );
};
