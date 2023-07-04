import { Stack, Typography, Button } from '@mui/material';
import { colors } from 'src/theme';

import { AboutBlock } from './AboutBlock';
import { ProductStack } from './Stack';

type ProductProps = {
    card: JSX.Element;
    title: string | JSX.Element;
    subtitle: string | JSX.Element;
    description: string;
    aboutItems: JSX.Element[];
    onClick?: VoidFunction;
};

export const Product = ({ card, title, subtitle, description, aboutItems, onClick }: ProductProps) => {
    return (
        <Stack spacing="48px" direction="row" alignItems="center">
            <Stack minWidth="260px" minHeight="166px" justifyContent="center" alignItems="center">
                {card}
            </Stack>
            <Stack spacing="61px" direction="row" alignItems="center" justifyContent="flex-end">
                <Stack minWidth="230px" spacing="32px" alignItems="flex-start">
                    <Stack spacing="6px">
                        <Typography variant="regular14" sx={{ color: colors.neutral600 }}>
                            {title}
                        </Typography>
                        <Typography variant="subtitle2Semibold" sx={{ lineHeight: '30px' }}>
                            {subtitle}
                        </Typography>
                    </Stack>

                    <Button variant="primary" onClick={onClick}>
                        Подробнее
                    </Button>
                </Stack>
                <Stack spacing="24px">
                    <Typography
                        component="div"
                        variant="descriptionRegular"
                        sx={{
                            color: colors.neutral600,
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        {description}
                    </Typography>
                    <Stack spacing="32px" direction="row">
                        {aboutItems}
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};

Product.Stack = ProductStack;
Product.AboutBlock = AboutBlock;
