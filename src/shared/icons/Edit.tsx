import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import { colors } from 'src/theme';

export const EditIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.7143 7.42832L18.8571 8.57118M19.4286 4.57118C19.6537 4.79627 19.8324 5.06353 19.9542 5.35767C20.0761 5.65181 20.1388 5.96708 20.1388 6.28546C20.1388 6.60385 20.0761 6.91911 19.9542 7.21325C19.8324 7.5074 19.6537 7.77465 19.4286 7.99975L8.57143 18.8569L4 19.9997L5.14286 15.4923L16.0046 4.57575C16.4327 4.14554 17.0069 3.89205 17.6133 3.86558C18.2196 3.83912 18.8137 4.04162 19.2777 4.43289L19.4286 4.57118Z"
                stroke={colors.secondary800}
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </SvgIcon>
);
