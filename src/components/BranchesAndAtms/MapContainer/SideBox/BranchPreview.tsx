import { Box, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { MarkType } from 'src/redux/apis/infoService/types';

import { Accordion } from 'src/shared/Accordion';

import { colors } from 'src/theme';
import { marksImg } from 'src/constants';

import { splitByFirstMatch } from 'src/utils/splitByFirstMatch';

import { WorkingHourInfo } from './WorkingHourInfo';

type BranchPreviewProps = {
    isDisabledAccordion: boolean;
    matchString?: string;
    info: MarkType;
};

export const BranchPreview = ({ isDisabledAccordion, info, matchString }: BranchPreviewProps) => {
    const theme = useTheme();
    const textContent = info.cityName + ', ' + info.branchAddress;
    const today = new Date().getDay();
    const isOpen24 = info.name === 'ATM';
    const openHours = today > 4 || today < 1 ? info.shortenedDay : info.workingHours;
    const schedule = isOpen24 ? info.workingHours : openHours;

    const renderThreeStringArr = (arr: string[]) => (
        <>
            {arr[0]}
            <Typography component="span" sx={{ fontWeight: 600, color: colors.primary }}>
                {arr[1]}
            </Typography>
            {arr[2]}
        </>
    );
    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ width: '36px', height: '30px', overflow: 'hidden', flexShrink: '0' }}>
                    <Box
                        component="img"
                        src={marksImg[info.name as keyof typeof marksImg]}
                        alt="background"
                        sx={{
                            width: '56px',
                            height: '56px',
                            position: 'relative',
                            left: 'calc(-50% + 1px)',
                            bottom: '6px',
                        }}
                    />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Stack
                        sx={{
                            [theme.breakpoints.down('tablet')]: {
                                whiteSpace: 'normal',
                            },
                        }}
                    >
                        <Typography
                            variant="descriptionSemiBold"
                            sx={{
                                fontSize: '20px',
                                lineHeight: '30px',
                            }}
                        >
                            {info.name}
                        </Typography>
                        <Typography sx={{ lineHeight: '24px', color: colors.neutral600 }}>
                            {matchString
                                ? renderThreeStringArr(splitByFirstMatch(textContent, matchString))
                                : textContent}
                        </Typography>
                    </Stack>
                    <Box
                        sx={{
                            [theme.breakpoints.down('laptop')]: { width: '246px' },
                            '& >*': {
                                margin: '0px !important',
                            },
                        }}
                    >
                        <Accordion
                            isDisabled={isDisabledAccordion}
                            id="detailed-info"
                            aria-controls="detailed-info-content"
                            title={
                                <WorkingHourInfo
                                    isWorking={!!info.isOpen}
                                    workingHours={schedule}
                                    isDisabledAccordion={isDisabledAccordion}
                                />
                            }
                            text={
                                <Stack spacing={2} sx={{ display: 'flex', width: '100%' }}>
                                    <Box sx={{ color: colors.neutral600, lineHeight: '24px' }}>
                                        <Box sx={{ display: 'flex', gap: '16px' }}>
                                            <Typography>Пн-Чт</Typography>
                                            {info.workingHours}
                                        </Box>
                                        <Box sx={{ display: 'flex', gap: '16px' }}>
                                            <Typography>Пт</Typography>
                                            {isOpen24 ? info.workingHours : info.shortenedDay}
                                        </Box>
                                        {info.workAtWeekends ? (
                                            <Box sx={{ display: 'flex', gap: '16px' }}>
                                                <Typography>Сб-Вс</Typography>
                                                {info.workingHours}
                                            </Box>
                                        ) : (
                                            <Box sx={{ display: 'flex', gap: '16px' }}>
                                                <Typography>Сб-Вс</Typography>
                                                <Typography>Выходной</Typography>
                                            </Box>
                                        )}
                                    </Box>
                                </Stack>
                            }
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
