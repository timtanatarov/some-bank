import { Box, Typography, Stack, Button } from '@mui/material';
import { ToggleButton } from 'src/shared/ToggleButton';

import { groups, getByGroupName } from './constants';

type FiltersProps = {
    filters: string[];
    resultsLength: number | undefined;
    onClearClick: VoidFunction;
    onToggleFilter: (e: React.MouseEvent<HTMLElement>, value: string) => void;
    onShowResultsClick: VoidFunction;
};

export const Filters = ({ filters, resultsLength, onClearClick, onToggleFilter, onShowResultsClick }: FiltersProps) => {
    const renderFilterGroup = (groupName: string, groupData: ReturnType<typeof getByGroupName>) => (
        <Stack key={groupName} spacing="16px">
            <Typography variant="subtitle2Semibold" component="h4">
                {groupName}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {groupData.map((el, i) => (
                    <ToggleButton
                        isActiveToggle={filters.includes(el.value)}
                        value={el.value}
                        title={el.title}
                        icon={el.icon}
                        key={i}
                        onToggle={onToggleFilter}
                    />
                ))}
            </Box>
        </Stack>
    );
    return (
        <Stack
            spacing="24px"
            sx={{
                alignItems: 'flex-start',
                padding: {
                    laptop: '0 40px',
                    tablet: '0 60px',
                    mobile: '0 16px',
                },
            }}
        >
            <Button variant="textButton" onClick={onClearClick}>
                Очистить
            </Button>
            {groups
                .map((group) => [group, getByGroupName(group)] as [string, ReturnType<typeof getByGroupName>])
                .map((el) => renderFilterGroup(el[0], el[1]))}
            <Button variant="primary" onClick={onShowResultsClick} sx={{ width: '100%' }}>
                Показать результаты({resultsLength})
            </Button>
        </Stack>
    );
};
