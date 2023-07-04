import { FC } from 'react';

import { Box, Chip, SvgIcon, Stack, IconButton, Button } from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { ArrowLeftRounded, ArrowRightRounded, ArrowBackIos } from '@mui/icons-material';

import { colors } from 'src/theme';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';

import { MarkType } from 'src/redux/apis/infoService/types';

import { DetailedMarkInfo } from './DetailedMarkInfo';
import { Filters } from './Filters';
import { BranchPreview } from './BranchPreview';
import { NoResults } from './NoResults';
import { MobileActiveBranch } from './MobileActiveBranch';

import { getFilterTitle } from './constants';
import { MobileSideBox } from './MobileSideBox';

type SideBoxProps = {
    resultsLimit?: number;
    isOpen: boolean;
    isMobileActiveBranchOpen: boolean;
    marks: MarkType[] | undefined;
    searchInput: string;
    activeMarkId: string;
    filters: string[];
    isFiltersVisible: boolean;
    onClearClick: VoidFunction;
    onToggleFilter: (e: React.MouseEvent<HTMLElement>, value: string) => void;
    onShowResultsClick: VoidFunction;
    onToggleOpen: VoidFunction;
    onBranchClick: (id: string) => void;
    onBackClick: VoidFunction;
    onClickAway: VoidFunction;
};

export const SideBox: FC<SideBoxProps> = ({
    isOpen,
    isMobileActiveBranchOpen,
    marks,
    searchInput,
    activeMarkId,
    filters,
    isFiltersVisible,
    resultsLimit,
    onClearClick,
    onToggleFilter,
    onShowResultsClick,
    onBranchClick,
    onToggleOpen,
    onBackClick,
    onClickAway,
}) => {
    const isActiveMark = marks?.find((m) => activeMarkId === m.id);
    const { isMobile, isTablet } = useMatchesScreen();

    const renderFilterList = () => (
        <Box
            sx={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '44px',
                width: '100%',
                padding: {
                    laptop: '0 40px',
                    tablet: '0 60px',
                    mobile: '0 16px',
                },
            }}
        >
            {filters.map((el) => (
                <Chip
                    variant="darkDesignFilter"
                    icon={
                        <SvgIcon>
                            <ClearRoundedIcon />
                        </SvgIcon>
                    }
                    key={el}
                    label={getFilterTitle(el)}
                    onClick={(e) => onToggleFilter(e, el)}
                />
            ))}
        </Box>
    );

    const renderResults = () =>
        marks?.length ? (
            <Stack
                sx={{
                    padding: {
                        laptop: '0 40px',
                        tablet: '0 60px',
                        mobile: '0 16px',
                    },
                }}
            >
                {marks?.slice(0, resultsLimit).map((el) => (
                    <Box
                        key={el.id}
                        sx={{
                            padding: '16px 0 0 0',
                            borderBottom: `1px solid ${colors.neutral200}`,

                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                        onClick={() => onBranchClick(el.id)}
                    >
                        <BranchPreview info={el} matchString={searchInput} isDisabledAccordion={true} />
                    </Box>
                ))}
            </Stack>
        ) : (
            <NoResults />
        );

    const Content = (
        <>
            {!!filters.length && !activeMarkId && !isFiltersVisible && renderFilterList()}
            {!activeMarkId && !isFiltersVisible && renderResults()}
            {isFiltersVisible && (
                <Filters
                    resultsLength={marks?.length}
                    filters={filters}
                    onClearClick={onClearClick}
                    onToggleFilter={onToggleFilter}
                    onShowResultsClick={onShowResultsClick}
                />
            )}
        </>
    );

    return (
        <Box>
            {!(isMobile || isTablet) ? (
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0px',
                        height: '100%',
                        transform: isOpen ? 'translateX(0)' : 'translateX(-454px)',
                        transitionProperty: 'transform',
                        transitionDuration: '0.5s',
                        transitionTimingFunction: 'ease-in-out',
                        background: 'transparent',
                        pointerEvents: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        zIndex: isFiltersVisible ? 11 : 5,
                    }}
                >
                    <Box
                        sx={{
                            height: '100%',
                            width: '454px',
                            background: 'white',
                            pointerEvents: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: `${isFiltersVisible ? '140' : '180'}px 16px 56px 16px`,
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            sx={{
                                height: '100%',
                                overflowX: 'hidden',
                                overflowY: 'auto',
                            }}
                        >
                            {Content}
                            {!isFiltersVisible && isActiveMark && (
                                <Box>
                                    <Button
                                        onClick={onBackClick}
                                        sx={{
                                            alignSelf: 'start',
                                            mb: '44px',
                                            padding: '0 52px',
                                        }}
                                        startIcon={<ArrowBackIos />}
                                        variant="navigation"
                                    >
                                        Назад к результатам поиска
                                    </Button>
                                    <DetailedMarkInfo info={isActiveMark} />
                                </Box>
                            )}
                        </Box>
                    </Box>
                    <IconButton
                        disableRipple={true}
                        disableTouchRipple={true}
                        onClick={onToggleOpen}
                        sx={{
                            borderRadius: '0px 4px 4px 0px',
                            background: 'white',
                            height: '40px',
                            width: '18px',
                            pointerEvents: 'auto',
                        }}
                    >
                        {isOpen ? <ArrowLeftRounded /> : <ArrowRightRounded />}
                    </IconButton>
                </Box>
            ) : (
                <Box>
                    {!isActiveMark && !isMobileActiveBranchOpen && (
                        <MobileSideBox isFiltersVisible={isFiltersVisible} onToggleOpen={onToggleOpen} isOpen={isOpen}>
                            {Content}
                        </MobileSideBox>
                    )}
                    {!isFiltersVisible && !isOpen && isActiveMark && isMobileActiveBranchOpen && (
                        <MobileActiveBranch isActiveMark={isActiveMark} onClickAway={onClickAway} />
                    )}
                </Box>
            )}
        </Box>
    );
};
