import { ToggleButton as MuiToggleButton } from '@mui/material';
import { colors } from 'src/theme';

type ToggleButtonProps = {
    isActiveToggle: boolean;
    value: string;
    onToggle: (event: React.MouseEvent<HTMLElement>, status: string) => void;
    title: string;
    icon?: React.ReactNode;
};

export const ToggleButton = ({ isActiveToggle, value, onToggle, title, icon }: ToggleButtonProps) => {
    return (
        <MuiToggleButton
            selected={isActiveToggle}
            disableRipple={true}
            value={value}
            onChange={onToggle}
            sx={{
                color: colors.neutral600,
                border: 'none',
                borderRadius: '4px',
                background: colors.neutral100,
                padding: '8px 12px',
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',

                '&.Mui-selected': {
                    background: colors.secondary200,
                    color: colors.primary,

                    '&:hover': {
                        background: colors.secondary200,
                        color: colors.primary,
                    },
                },
            }}
        >
            {!!icon && icon}
            {title}
        </MuiToggleButton>
    );
};
