import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { colors } from 'src/theme';

export const SelectArrowDownIcon = (props: SvgIconProps) => (
    <SvgIcon {...props}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 10C11.9416 10 11.8863 10.0095 11.8341 10.0286C11.7849 10.0477 11.7389 10.0763 11.6959 10.1145L8.12442 13.3579C8.04147 13.4315 8 13.5201 8 13.6237C8 13.6946 8.01843 13.7573 8.0553 13.8119C8.09217 13.8691 8.14286 13.9141 8.20737 13.9468C8.26882 13.9823 8.33948 14 8.41935 14C8.53303 14 8.63287 13.9632 8.71889 13.8896L12 10.9121L15.2811 13.8896C15.3671 13.9632 15.467 14 15.5806 14C15.6605 14 15.7312 13.9823 15.7926 13.9468C15.8571 13.9141 15.9078 13.8691 15.9447 13.8119C15.9816 13.7573 16 13.6946 16 13.6237C16 13.5201 15.9601 13.4315 15.8802 13.3579L12.3041 10.1145C12.2611 10.0763 12.2135 10.0477 12.1613 10.0286C12.1121 10.0095 12.0584 10 12 10Z"
                fill={colors.primary}
            />
        </svg>
    </SvgIcon>
);
