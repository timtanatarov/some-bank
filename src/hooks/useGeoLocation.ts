import { useState, useEffect } from 'react';

import { engToRusCities } from 'src/services/regionLocationService/regionData';
import { defineLocation, getClosestCity } from 'src/services/regionLocationService';

export const useGeoLocation = () => {
    const [city, setCity] = useState<string | undefined>('Москва');
    const [locationCoords, setLocationCoords] = useState<[number, number] | undefined>();
    const [geoLocationError, setGeoLocationError] = useState<boolean>(false);
    const [fetchingError, setFetchingError] = useState<boolean>();
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocationCoords([latitude, longitude]);
                    setCity(getClosestCity([latitude, longitude]));
                },
                (_) => {
                    setGeoLocationError(true);
                    defineLocation().then((res) => {
                        if (!res) {
                            setFetchingError(true);
                        } else {
                            setLocationCoords(res.coordinates);
                            setCity(engToRusCities[res.city as keyof typeof engToRusCities]);
                        }
                    });
                }
            );
        } else {
            setGeoLocationError(true);
            defineLocation().then((res) => {
                if (!res) {
                    setFetchingError(true);
                } else {
                    setLocationCoords(res.coordinates);
                    setCity(engToRusCities[res.city as keyof typeof engToRusCities]);
                }
            });
        }
    }, [toggle]);

    return { locationCoords, city, fetchingError, geoLocationError, retry: setToggle };
};
