import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { MarkType } from 'src/redux/apis/infoService/types';

import { BulletIcon } from 'src/shared/icons';

import { colors } from 'src/theme';

import { BranchPreview } from './BranchPreview';
import { getMarkFilterGroups } from './constants';

type DetailedMarkInfoProps = { info: MarkType };

export const DetailedMarkInfo: FC<DetailedMarkInfoProps> = ({ info }) => {
    const theme = useTheme();
    return (
        <Stack
            sx={{
                width: '342px',
                margin: '0 40px',
                [theme.breakpoints.down('laptop')]: {
                    width: '100%',
                    height: 'auto',
                    margin: '0 44px',
                },
                [theme.breakpoints.down('tablet')]: {
                    margin: '0',
                },
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    padding: '16px 0 12px',
                    [theme.breakpoints.down('laptop')]: {
                        padding: '0 0 12px',
                    },
                }}
            >
                <BranchPreview info={info} isDisabledAccordion={false} />
            </Box>
            <Box>
                {getMarkFilterGroups(info).map((el, index) => (
                    <Stack key={index} sx={{ display: 'flex', width: '100%', padding: '12px 16px 12px 0' }}>
                        <Typography
                            variant="descriptionSemiBold"
                            sx={{ mb: '20px', fontSize: '20px', lineHeight: '30px' }}
                        >
                            {el?.group}
                        </Typography>
                        <Box
                            sx={{
                                width: '342px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: colors.neutral600,
                                gap: '16px',
                                [theme.breakpoints.down('laptop')]: { width: '100%' },
                            }}
                        >
                            {el?.options.map((option, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <BulletIcon />
                                    <Typography>{option}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Stack>
                ))}
            </Box>
        </Stack>
    );
};
