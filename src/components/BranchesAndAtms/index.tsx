import { useEffect, useState } from 'react';
import { useGeoLocation } from 'src/hooks/useGeoLocation';

import { getClosestCity } from 'src/services/regionLocationService';

import { PageContainer } from 'src/shared/containers/PageContainer';

import { CookieBanner } from './CookieBanner';
import { MapContainer } from './MapContainer';
import { RegionConfirm } from './MapContainer/RegionConfirm';

export const BranchesAndAtms = () => {
    const { locationCoords, city, geoLocationError } = useGeoLocation();
    const [region, setRegion] = useState('Москва');

    useEffect(() => {
        if (locationCoords) {
            setRegion(getClosestCity(locationCoords));
        }
    }, [locationCoords]);

    const [isShowCookieBanner, setIsShowCookieBanner] = useState(true);
    const [isConfirmVisible, setIsConfirmVisible] = useState(true);
    const [isRegionDialogVisible, setIsRegionDialogVisible] = useState(false);

    const toggleVisibility = () => {
        setIsRegionDialogVisible(!isRegionDialogVisible);
    };

    const handleConfirm = () => {
        setRegion(region);
        setIsConfirmVisible(false);
    };

    const handleDeny = () => {
        toggleVisibility();
        setIsConfirmVisible(false);
    };

    const handleOpen = () => {
        setIsConfirmVisible(!isConfirmVisible);
    };

    const handleClick = () => {
        setIsShowCookieBanner(false);
    };

    const locationTitle = (
        <RegionConfirm
            city={region}
            isModalOpen={isConfirmVisible}
            onOpen={handleOpen}
            onConfirm={handleConfirm}
            onDeny={handleDeny}
        />
    );

    return (
        <PageContainer
            theme="black"
            headerPosition="absolute"
            headerProps={{ extraItem: locationTitle, withBlur: true }}
            hasSideMenu={false}
        >
            <MapContainer
                locationCoords={locationCoords}
                city={city}
                isIpServiceUsed={geoLocationError}
                region={region}
                isRegionDialogVisible={isRegionDialogVisible}
                setIsConfirmVisible={setIsConfirmVisible}
                setRegion={setRegion}
                toggleVisibility={toggleVisibility}
            />
            {isShowCookieBanner ? <CookieBanner onClose={handleClick} /> : null}
        </PageContainer>
    );
};
