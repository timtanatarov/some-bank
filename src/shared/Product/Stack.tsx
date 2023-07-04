import { ReactNode } from 'react';

import { Stack, Divider } from '@mui/material';

import { colors } from 'src/theme';

type ListProps = {
    children: ReactNode | ReactNode[];
};

export const ProductStack = ({ children }: ListProps) => {
    return (
        <Stack
            spacing="24px"
            divider={
                <Divider
                    orientation="horizontal"
                    light={true}
                    sx={{
                        '&:not(:last-child)': {
                            borderBottom: `1px solid ${colors.neutral200}`,
                        },
                        '&:last-child': {
                            borderBottom: 'none',
                        },
                    }}
                />
            }
        >
            {children}
        </Stack>
    );
};
