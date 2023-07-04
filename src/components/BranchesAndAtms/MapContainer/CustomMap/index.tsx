import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import { FC, useState, useMemo, useEffect } from 'react';
import ymaps from 'yandex-maps';

import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { MAP_MAX_ZOOM, MAP_MIN_ZOOM, MAP_DEFAULT_ZOOM, MAP_ZOOM_STEP, activeMarksImg, marksImg } from 'src/constants';
import { getCityCenterLocation } from 'src/services/regionLocationService';

import { MarkType } from 'src/redux/apis/infoService/types';

import { MapControls } from './MapControls';
import { UserLocationMarker } from './UserLocationMarker';

import { PortalToYMark } from './PortalToYMark';

type CustomMapProps = {
    height?: string;
    width?: string;
    locationCoords?: number[];
    city?: string;
    region: string;
    isIpServiceUsed: boolean;
    marks: MarkType[] | undefined;
    activeMarkId: string;
    setActiveMarkId: React.Dispatch<React.SetStateAction<string>>;
};

type YIconTemplate = ReturnType<typeof ymaps.templateLayoutFactory.createClass>;

export const CustomMap: FC<CustomMapProps> = ({
    height = 'calc(100% - 1px)',
    width = '100%',
    city,
    region,
    marks,
    locationCoords,
    activeMarkId,
    isIpServiceUsed,
    setActiveMarkId,
}) => {
    const defaultLocation = useMemo(() => {
        if (locationCoords || isIpServiceUsed) {
            if (city !== region) {
                return getCityCenterLocation(region);
            }

            return locationCoords;
        }

        return getCityCenterLocation('Москва');
    }, [city, isIpServiceUsed, locationCoords, region]);
    const [zoom, setZoom] = useState(MAP_DEFAULT_ZOOM);
    const [coords, setCoords] = useState(defaultLocation);
    const [isUserLocationVisible, setIsUserLocationVisible] = useState(false);
    const [template, setTemplate] = useState<YIconTemplate>();
    const [isIdReady, setIsIdReady] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        setCoords(defaultLocation);
        setIsUserLocationVisible(false);
        setIsIdReady(false);
    }, [city, defaultLocation]);

    const handleUpdateLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCoords([latitude, longitude]);
                    setIsUserLocationVisible(true);
                },
                null,
                { enableHighAccuracy: true }
            );
        }
    };

    const handleZoomIn = () => zoom <= MAP_MAX_ZOOM - MAP_ZOOM_STEP && setZoom((value) => value + MAP_ZOOM_STEP);
    const handleZoomOut = () => zoom >= MAP_MIN_ZOOM + MAP_ZOOM_STEP && setZoom((value) => value - MAP_ZOOM_STEP);

    const handleClick = (id: string) => {
        setActiveMarkId(activeMarkId !== id ? id : '');
    };

    return (
        <Box
            sx={{
                position: 'relative',
                height,
                width,
                overflow: 'hidden',
                zIndex: 0,

                '& ymaps[class*=-map-bg]': {
                    background: '#555555',
                },

                '& ymaps[class*=-ground-pane]': {
                    filter: ' invert(0.89) grayscale(88%) hue-rotate(190deg) brightness(170%)',
                },
            }}
        >
            <YMaps>
                <Map
                    defaultState={{
                        center: defaultLocation,
                        zoom: 9,
                    }}
                    state={{ zoom, center: coords }}
                    width="100%"
                    height="100%"
                    modules={['templateLayoutFactory']}
                    onLoad={(ymaps) => {
                        setTemplate(() => ymaps.templateLayoutFactory.createClass(`<div id="myLocation">Hello</div>`));
                    }}
                >
                    {isUserLocationVisible && (
                        <Placemark
                            geometry={coords}
                            options={{
                                preset: 'islands#circleIcon',
                                iconContentLayout: template,
                            }}
                            onLoad={(ymaps) => {
                                if (ymaps) {
                                    setIsIdReady(true);
                                }
                            }}
                        />
                    )}
                    <Clusterer
                        options={{
                            preset: 'islands#darkGreenClusterIcons',
                            groupByCoordinates: false,
                        }}
                    >
                        {marks?.map((data) => {
                            return (
                                <Placemark
                                    key={data.id}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageHref:
                                            activeMarkId === data.id
                                                ? activeMarksImg[data.name as keyof typeof activeMarksImg]
                                                : marksImg[data.name as keyof typeof marksImg],
                                        iconImageSize: [44, 56],
                                        iconImageOffset: [-22, -56], // actual place is top-left corner by default
                                    }}
                                    geometry={data.coordinates}
                                    onClick={() => handleClick(data.id)}
                                />
                            );
                        })}
                    </Clusterer>
                </Map>
            </YMaps>
            <MapControls
                sx={{
                    height: '100%',
                    position: 'absolute',
                    right: '56px',
                    bottom: '0',
                    justifyContent: 'center',
                    [theme.breakpoints.down('laptop')]: {
                        right: '60px',
                        zIndex: '1',
                    },
                    [theme.breakpoints.down('tablet')]: {
                        right: '16px',
                    },
                }}
                onZoomIn={handleZoomIn}
                onZoomOut={handleZoomOut}
                onUpdateLocation={handleUpdateLocation}
            />
            {isIdReady && (
                <PortalToYMark id="myLocation">
                    {/* put custom mark element inside here */}
                    <UserLocationMarker />
                </PortalToYMark>
            )}
        </Box>
    );
};
