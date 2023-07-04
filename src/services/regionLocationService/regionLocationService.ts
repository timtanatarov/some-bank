import { IP_SERVICE_API_KEY } from '../../constants';

import { cities, popularCities } from './regionData';

type ipServiceResponse = Record<
    'city' | 'country' | 'hostname' | 'ip' | 'loc' | 'org' | 'postal' | 'region' | 'timezone',
    string
>;

export const defineLocation = async () => {
    try {
        const response = await fetch(`https://ipinfo.io?token=${IP_SERVICE_API_KEY}`);

        if (response.status !== 200) {
            return undefined;
        }

        const { loc, city }: ipServiceResponse = await response.json();
        const coordinates = loc.split(',').map((el: string) => Number(el)) as [number, number];

        return { coordinates, city };
    } catch (_) {
        return undefined;
    }
};

export const getCityCenterLocation = (city: string | undefined) => (city ? cities[city] : cities['Москва']);

export const getAllCitiesNames = () => Object.keys(cities);

export const getPopularCities = () => popularCities.filter((city) => city in cities);

const citiesArray = Object.entries(cities);

export const getClosestCity = ([latitude, longitude]: [number, number]) => {
    let min = Infinity;
    return citiesArray
        .map((el) => {
            const cityLat = el[1][0];
            const cityLong = el[1][1];
            const city = el[0];
            return { city, diff: (cityLat - latitude) ** 2 + (cityLong - longitude) ** 2 };
        })
        .reduce((closestCity, el) => {
            if (min > el.diff) {
                min = el.diff;
                return el.city;
            }
            return closestCity;
        }, '');
};
