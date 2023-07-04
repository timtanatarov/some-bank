import { Link as RouterLink, useMatch } from 'react-router-dom';
import { Link, Avatar } from '@mui/material';
import { AvatarIcon } from 'src/shared/icons';
import { AppRoutes } from 'src/constants';
import { useGetUserInfoQuery } from 'src/redux/apis/userService';

import { useAppSelector } from 'src/redux/hooks';
import { selectClientId } from 'src/redux/selectors';

import { colors } from 'src/theme';

export const ProfileLink = () => {
    const clientId = useAppSelector(selectClientId);
    const { firstName, lastName, isSuccess, avatarUrl } = useGetUserInfoQuery(clientId, {
        selectFromResult: ({ data, isSuccess }) => ({
            firstName: data?.firstName,
            lastName: data?.lastName,
            isSuccess,
            avatarUrl: data?.imageUrl,
        }),
    });

    const isMatches = !!useMatch({ path: AppRoutes.profileRoute, end: false });

    return isSuccess ? (
        <Link
            data-cy="profile-link"
            component={RouterLink}
            to={AppRoutes.profileRoute}
            underline="none"
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexShrink: 2,
                color: isMatches ? colors.secondary800 : 'inherit',
                textTransform: 'capitalize',
                textAlign: 'center',
            }}
        >
            {avatarUrl && avatarUrl !== 'Not found image' ? (
                <Avatar
                    data-cy="profile-avatar"
                    alt="Фотография пользователя"
                    sx={{
                        height: '24px',
                        width: '24px',
                    }}
                    src={avatarUrl}
                />
            ) : (
                <AvatarIcon />
            )}
            {`${firstName} ${lastName}`}
        </Link>
    ) : null;
};
