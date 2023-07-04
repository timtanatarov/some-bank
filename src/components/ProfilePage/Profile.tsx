import { Stack, Typography, useTheme } from '@mui/material';

import { useAppSelector } from 'src/redux/hooks';
import { selectClientId } from 'src/redux/selectors';

import { colors } from 'src/theme';
import { useGetUserInfoQuery } from 'src/redux/apis/userService';
import { formatPhoneNumberOutput } from 'src/utils/inputFormatters';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';

import { profileFieldsConfig } from './constants';

export const ProfileBlock = () => {
    const theme = useTheme();
    const { isMobile, isTablet, isLaptop } = useMatchesScreen();
    const clientId = useAppSelector(selectClientId);
    const isLowerThanLaptop = isMobile || isTablet;
    const { userInfo } = useGetUserInfoQuery(clientId, {
        selectFromResult: ({ data }) => ({
            userInfo: {
                firstName: data?.firstName,
                lastName: data?.lastName,
                middleName: data?.middleName,
                mobilePhone: data?.mobilePhone && formatPhoneNumberOutput(data?.mobilePhone.slice(1)),
                countryOfResidence: data?.residentOfRussia ? 'Резидент РФ' : 'Нерезидент РФ',
            },
        }),
    });

    return (
        <Stack spacing="24px">
            {!(isTablet || isLaptop) && (
                <Typography variant={isLowerThanLaptop ? 'subtitle2Semibold' : 'bold24'}>Профиль</Typography>
            )}
            <Typography
                variant="descriptionSemiBold"
                sx={{
                    [theme.breakpoints.down('laptop')]: { fontSize: '20px', lineHeight: '30px', fontWeight: 400 },
                    [theme.breakpoints.down('tablet')]: { fontSize: '16px', lineHeight: '20px' },
                }}
            >
                Личная информация
            </Typography>
            <Stack spacing="20px">
                {userInfo &&
                    profileFieldsConfig.map(
                        (item) =>
                            userInfo[item.name as keyof typeof userInfo] && (
                                <Stack spacing="8px" key={item.name}>
                                    <Typography variant="regular14_20" sx={{ color: colors.neutral600 }}>
                                        {item.label}
                                    </Typography>
                                    <Typography variant="descriptionRegular">
                                        {userInfo[item.name as keyof typeof userInfo]}
                                    </Typography>
                                </Stack>
                            )
                    )}
            </Stack>
        </Stack>
    );
};
