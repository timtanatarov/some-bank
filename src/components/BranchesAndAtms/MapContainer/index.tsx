import { useEffect, useState, SyntheticEvent, FC } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useAppSelector } from 'src/redux/hooks';

import { selectQuickFilter } from 'src/redux/selectors';
import { useGetBranchesDataQuery } from 'src/redux/apis/infoService';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';

import { WarningModal } from 'src/shared/WarningModal';

import { CustomMap } from './CustomMap';
import { RegionDialog } from './RegionDialog';
import { SearchBlock } from './SearchBlock';
import { SideBox } from './SideBox';
import { QuickFilters } from './QuickFilters';

type MapContainerProps = {
    region: string;
    isRegionDialogVisible: boolean;
    setIsConfirmVisible: (value: boolean) => void;
    setRegion: (value: string) => void;
    toggleVisibility: VoidFunction;
    isIpServiceUsed: boolean;
    locationCoords?: number[];
    city?: string;
};

export const MapContainer: FC<MapContainerProps> = ({
    region,
    isRegionDialogVisible,
    isIpServiceUsed,
    setIsConfirmVisible,
    setRegion,
    toggleVisibility,
    locationCoords,
    city,
}) => {
    const theme = useTheme();
    const { isMobile, isTablet } = useMatchesScreen();
    const isLowerThanLaptop = isMobile || isTablet;

    const { data: branchesData, error } = useGetBranchesDataQuery();

    const [isSideBoxOpen, setIsSideBoxOpen] = useState(false);
    const [isMobileActiveBranchOpen, setIsMobileActiveBranchOpen] = useState(false);
    const [activeMarkId, setActiveMarkId] = useState('');
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [isErrorModalOpened, setIsErrorModalOpened] = useState(false);

    const filteredMarks = branchesData
        ?.filter((el) => activeFilters.every((filter) => el[filter as keyof typeof el]))
        .filter((el) =>
            searchInput
                ? (el.branchAddress + ', ' + el.cityName).toLowerCase().includes(searchInput.toLowerCase())
                : true
        );

    const quickFilter = useAppSelector(selectQuickFilter);

    const quickFilteredBranchesData = quickFilter
        ? branchesData?.filter((branch) => branch[quickFilter as keyof typeof branch])
        : branchesData;

    const handleShowResultsClick = () => {
        setIsFiltersVisible(false);
    };

    const handleClearFilters = () => {
        setActiveFilters([]);
    };

    const handleToggleFilter = (e: React.MouseEvent<HTMLElement>, value: string) => {
        activeFilters.includes(value)
            ? setActiveFilters((filters) => filters.filter((el) => el !== value))
            : setActiveFilters((filters) => [...filters, value]);
    };

    const handleAutocompleteSelect = (e: SyntheticEvent, value: string | null) => {
        if (value) {
            setRegion(value);
            toggleVisibility();
            setIsConfirmVisible(false);
        }
    };
    const handlePopularSelect = (e: SyntheticEvent) => {
        const target = e.target as Element;
        const currentTarget = e.currentTarget as Element;
        if (target !== currentTarget && target.textContent) {
            setRegion(target.textContent);
            toggleVisibility();
            setIsConfirmVisible(false);
        }
    };

    useEffect(() => {
        if (activeMarkId && !isLowerThanLaptop) {
            setIsSideBoxOpen(!!activeMarkId);
            setIsFiltersVisible(false);
        }
        if (activeMarkId && isLowerThanLaptop) {
            setIsMobileActiveBranchOpen(!!activeMarkId);
            setIsSideBoxOpen(false);
            setIsFiltersVisible(false);
        }
    }, [activeMarkId, isLowerThanLaptop]);

    useEffect(() => {
        if (error) {
            setIsErrorModalOpened(true);
        }
    }, [error]);

    return (
        <Box sx={{ position: 'relative', height: '1px', minHeight: '100%' }}>
            <Box
                sx={{
                    position: 'relative',
                    overflow: 'visible',
                    background: '#eeeeee',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        left: '56px',
                        top: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        zIndex: 10,
                        columnGap: '20px',
                        [theme.breakpoints.down('laptop')]: {
                            width: 'calc(100vw - 60px)',
                            left: '60px',
                            top: '144px',
                            flexWrap: 'wrap',
                            gap: '24px',
                            overflow: 'hidden',
                        },
                        [theme.breakpoints.down('tablet')]: {
                            width: 'calc(100vw - 16px)',
                            top: '104px',
                            left: '16px',
                        },
                    }}
                >
                    <SearchBlock
                        isOpen={isSideBoxOpen}
                        onToggle={() => {
                            setIsSideBoxOpen((isOpen) => !isOpen);
                            setIsFiltersVisible(false);
                            if (isLowerThanLaptop) {
                                setIsMobileActiveBranchOpen(false);
                                setActiveMarkId('');
                            }
                        }}
                        inputValue={searchInput}
                        onInputChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setSearchInput(e.target.value);
                        }}
                        onClearInputClick={() => {
                            setSearchInput('');
                        }}
                        onOpenClick={() => {
                            setIsSideBoxOpen(true);
                            setIsFiltersVisible(true);
                            setActiveMarkId('');
                            setIsMobileActiveBranchOpen(false);
                        }}
                    />
                    {!isLowerThanLaptop && <QuickFilters disabledFilters={isSideBoxOpen} />}
                    {isLowerThanLaptop && !isSideBoxOpen && <QuickFilters disabledFilters={isSideBoxOpen} />}
                </Box>
                <RegionDialog
                    open={isRegionDialogVisible}
                    region={region}
                    onClose={toggleVisibility}
                    onAutocompleteSelect={handleAutocompleteSelect}
                    onPopularSelect={handlePopularSelect}
                />
            </Box>
            <SideBox
                isOpen={isSideBoxOpen}
                isMobileActiveBranchOpen={isMobileActiveBranchOpen}
                marks={filteredMarks}
                activeMarkId={activeMarkId}
                searchInput={searchInput}
                filters={activeFilters}
                resultsLimit={5}
                onClearClick={handleClearFilters}
                onToggleFilter={handleToggleFilter}
                onBranchClick={(id: string) => {
                    setActiveMarkId(id);
                }}
                isFiltersVisible={isFiltersVisible}
                onShowResultsClick={handleShowResultsClick}
                onToggleOpen={() => setIsSideBoxOpen((isOpen) => !isOpen)}
                onBackClick={() => setActiveMarkId('')}
                onClickAway={() => {
                    setIsMobileActiveBranchOpen(false);
                    setActiveMarkId('');
                }}
            />

            <CustomMap
                locationCoords={locationCoords}
                city={city}
                isIpServiceUsed={isIpServiceUsed}
                region={region}
                marks={isSideBoxOpen ? filteredMarks : quickFilteredBranchesData}
                activeMarkId={activeMarkId}
                setActiveMarkId={setActiveMarkId}
            />
            <WarningModal
                message="Сервис временно недоступен."
                isOpen={isErrorModalOpened}
                onClose={() => setIsErrorModalOpened(false)}
            />
        </Box>
    );
};
