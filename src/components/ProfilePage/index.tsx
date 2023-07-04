import { Outlet, useNavigate } from 'react-router-dom';

import { useAppSelector } from 'src/redux/hooks';
import { selectClientId } from 'src/redux/selectors';

import { Box, Divider, Paper, Stack } from '@mui/material';

import { useState, useRef, ChangeEvent } from 'react';

import { PageContainer } from 'src/shared/containers/PageContainer';
import { VerticalNavbar } from 'src/shared/VerticalNavbar';

import { profileMenuItems } from 'src/constants';

import { BackArrowButton } from 'src/shared/BackArrowButton';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';
import { colors } from 'src/theme';

import {
    useGetUserInfoQuery,
    useRemoveClientPhotoMutation,
    useSetClientPhotoMutation,
} from 'src/redux/apis/userService';

import { UserAvatar } from './UserAvatar';

import { MobileNavbar } from './MobileNavbar';

export const ProfilePage = () => {
    const clientId = useAppSelector(selectClientId);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const navigate = useNavigate();
    const { isMobile, isTablet } = useMatchesScreen();
    const { data: userInfo } = useGetUserInfoQuery(clientId);

    const [setClientPhoto, { isLoading: isClientPhotoLoading }] = useSetClientPhotoMutation();
    const [removeClientPhoto] = useRemoveClientPhotoMutation();

    const fileInputRef = useRef<HTMLInputElement>(null);

    const goBack = () => {
        navigate('/profile');
        setIsMenuOpen(true);
    };

    const handleOpenFileModal = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const formData = new FormData();
        const file = event.target.files[0];
        formData.append('image', file);
        setClientPhoto({ clientId, formData });
    };

    const handleDeleteClientAvatar = () => {
        removeClientPhoto({ clientId });
    };

    return (
        <PageContainer theme="white" headerPosition="absolute">
            <input
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeInput(e)}
                ref={fileInputRef}
                style={{ display: 'none' }}
                type="file"
                accept="image/*,.png,.jpg,.gif,.web"
            />
            <Box
                sx={{
                    padding: {
                        desktop: '88px 56px 46px 56px',
                        laptop: '88px 56px 46px 56px',
                        tablet: '124px 56px 56px',
                        mobile: '124px 16px 56px',
                    },
                    height: '100%',
                    display: 'flex',
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        padding: {
                            laptop: '36px 91px 36px 36px',
                            tablet: '44px',
                            mobile: '24px',
                        },
                        flexGrow: 1,
                        display: 'flex',
                        gap: { laptop: '56px', tablet: '44px' },
                        flexDirection: { laptop: 'row', mobile: 'column' },
                    }}
                >
                    <Stack
                        spacing={{ laptop: '100px', tablet: '44px', mobile: '34px' }}
                        sx={{
                            width: { laptop: '191px', tablet: '100%', mobile: '100% ' },
                            alignItems: { tablet: 'center', mobile: 'flex-start' },
                        }}
                    >
                        <UserAvatar
                            imgUrl={userInfo?.imageUrl ? userInfo?.imageUrl : ''}
                            loading={isClientPhotoLoading}
                            onDeleteClientAvatar={handleDeleteClientAvatar}
                            onOpenFileModal={handleOpenFileModal}
                        />

                        {!isMobile && (
                            <VerticalNavbar
                                navList={profileMenuItems}
                                orientation={isTablet ? 'horizontal' : 'vertical'}
                                extraTabsStyles={{
                                    '.MuiTabs-flexContainer': !isTablet
                                        ? { alignItems: 'stretch', gap: '44px' }
                                        : { justifyContent: 'space-between', gap: '0px' },
                                }}
                            />
                        )}
                        {isMobile && isMenuOpen && (
                            <MobileNavbar
                                navList={profileMenuItems}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                }}
                            />
                        )}
                    </Stack>
                    {(!isMobile || (isMobile && !isMenuOpen)) && (
                        <>
                            <Divider orientation="vertical" flexItem={true} />
                            <Box sx={{ flexGrow: 1, position: isMobile ? 'relative' : 'static' }}>
                                {isMobile && (
                                    <BackArrowButton
                                        onClick={goBack}
                                        sx={{
                                            color: colors.neutral600,
                                            lineHeight: '24px',
                                            position: 'absolute',
                                            top: '4px',
                                            right: '0',
                                        }}
                                    />
                                )}
                                <Outlet />
                            </Box>
                        </>
                    )}
                </Paper>
            </Box>
        </PageContainer>
    );
};
