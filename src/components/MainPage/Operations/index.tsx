import { useState, useMemo } from 'react';
import { Stack, Box, Typography, Link, Skeleton } from '@mui/material';
import { ComingSoonModal } from 'src/shared/ComingSoonModal';

import { colors } from 'src/theme';

import { Operation } from './Operation';

import { operationsData } from './constants';

const RESULTS_LIMIT = 6;

export const OperationsHistory = () => {
    const isLoading = false;
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const skeletons = useMemo(
        () =>
            [0, 0, 0, 0, 0].map((_, i) => (
                <Skeleton sx={{ borderRadius: '4px', width: '100%', height: '56px' }} variant="rectangular" key={i} />
            )),
        []
    );

    return (
        <Stack spacing="40px" sx={{ padding: '40px 36px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="bold24" sx={{ color: colors.primary }}>
                    История операций
                </Typography>
                <Link
                    href="#"
                    onClick={handleOpen}
                    underline="none"
                    sx={{ textAlign: 'right', color: colors.neutral600 }}
                >
                    <Typography variant="descriptionRegular">Еще</Typography>
                </Link>
            </Box>
            <Stack spacing="8px">
                {isLoading
                    ? skeletons
                    : operationsData
                          .slice(0, RESULTS_LIMIT)
                          .map((item, index) => (
                              <Operation
                                  key={index}
                                  date={item.createadAt}
                                  payeeId={item.payeeId}
                                  sum={item.sum}
                                  typeName={item.typeName}
                                  currencyCode={item.currencyCode}
                              />
                          ))}
            </Stack>
            <ComingSoonModal isOpen={open} onClose={handleClose} />
        </Stack>
    );
};
