import { Skeleton, Stack } from '@mui/material';

export const SkeletonProduct = () => {
    return (
        <Stack spacing="48px" direction="row" alignItems="center">
            <Stack minWidth="260px" minHeight="166px" justifyContent="center" alignItems="center">
                <Skeleton variant="rectangular" width={260} height={166} sx={{ borderRadius: '12px' }} />
            </Stack>
            <Stack spacing="61px" direction="row" alignItems="center" justifyContent="flex-end">
                <Stack minWidth="230px" spacing="32px" alignItems="flex-start">
                    <Stack spacing="6px">
                        <Skeleton width={59} height={20} />
                        <Skeleton width={156} height={30} />
                    </Stack>

                    <Skeleton variant="rectangular" width={137} height={48} />
                </Stack>
                <Stack spacing="24px">
                    <Skeleton variant="rectangular" sx={{ borderRadius: '4px' }} />
                    <Stack spacing="32px" direction="row">
                        <Skeleton variant="rectangular" sx={{ borderRadius: '4px' }} width={260} height={45} />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
