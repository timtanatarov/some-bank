import { useEffect, useState } from 'react';

import { useAppSelector } from 'src/redux/hooks';
import { selectClientId } from 'src/redux/selectors';

import { useNavigate } from 'react-router-dom';

import { Tabs, Tab, Typography, Stack, Button, useTheme } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { useMatchesScreen } from 'src/hooks/useMatchesScreen';

import { ControlQuestion } from 'src/shared/ControlQuestion';

import { useGetUserInfoQuery, useUpdateSecurityQuestionMutation } from 'src/redux/apis/userService';

import { SuccessDialog } from 'src/shared/SuccessDialog';

import { ChangePasswordBlock } from 'src/components/ProfilePage/Security/Password';
import { AppRoutes } from 'src/constants';
import { colors } from 'src/theme';

export const SecuritySettingsBlock = () => {
    const theme = useTheme();
    const clientId = useAppSelector(selectClientId);
    const { isMobile, isTablet, isLaptop } = useMatchesScreen();
    const isLowerThanLaptop = isMobile || isTablet;
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    const [updateSecurityQuestion, { isSuccess: isQuestionChanged, isError: isQuestionError }] =
        useUpdateSecurityQuestionMutation();
    const { data, refetch } = useGetUserInfoQuery(clientId);

    useEffect(() => {
        if (isQuestionChanged) setIsDialogVisible(true);
    }, [isQuestionChanged]);

    const handleContinueQuestion = ({
        securityQuestion,
        securityAnswer,
    }: {
        securityQuestion: string;
        securityAnswer: string;
    }) => {
        updateSecurityQuestion({
            securityQuestion,
            securityAnswer,
        });
    };

    const handleDialogClose = () => {
        setIsDialogVisible(false);
        if (isQuestionChanged) refetch();
    };

    return (
        <Stack spacing={{ laptop: 3 }}>
            {!(isTablet || isLaptop) && (
                <Typography variant={isLowerThanLaptop ? 'subtitle2Semibold' : 'bold24'} component="h5">
                    Безопасность
                </Typography>
            )}
            <Tabs
                orientation={isLowerThanLaptop ? 'vertical' : 'horizontal'}
                value={activeTab}
                onChange={(e, value) => setActiveTab(value)}
                sx={{
                    minHeight: 'auto',
                    display: 'flex',
                    paddingTop: { tablet: '0', mobile: '32px' },

                    '.MuiTabs-indicator': {
                        laptop: {
                            background: colors.secondary200,
                            height: '3px',
                            borderRadius: '10px',
                            display: 'block',
                        },
                        mobile: { display: 'none' },
                    },

                    '.MuiTabs-scroller': {
                        flexGrow: 0,
                        width: 'auto',
                    },

                    '.MuiTabs-flexContainer': {
                        width: 'auto',
                        gap: { laptop: '54px', mobile: '24px' },
                        borderBottom: { laptop: `1px solid ${colors.neutral200}` },
                        alignItems: 'flex-start',
                    },
                }}
            >
                {(!isLowerThanLaptop || isMenuOpen) &&
                    ['Изменить контрольный вопрос', 'Изменить пароль авторизации'].map((el, i) => (
                        <Tab
                            sx={{
                                fontSize: { laptop: '16px', tablet: '20px', mobile: '16px' },
                                lineHeight: { laptop: '24px', tablet: '30px', mobile: '24px' },
                                fontWeight: isLowerThanLaptop ? 400 : 600,
                                textTransform: 'none',
                                color: {
                                    mobile: colors.primary,
                                    laptop: colors.neutral600,
                                },
                                padding: '0 16px 2px 0',
                                minHeight: 'auto',

                                '&:hover': {
                                    color: colors.primary,
                                },

                                '&.Mui-selected': {
                                    color: `${colors.primary} !important`,
                                },
                            }}
                            label={el}
                            value={i}
                            key={i}
                            icon={isLowerThanLaptop ? <KeyboardArrowRightIcon /> : undefined}
                            iconPosition="end"
                            onClick={() => {
                                setIsMenuOpen(false);
                            }}
                        />
                    ))}
            </Tabs>
            {(!isLowerThanLaptop || isMenuOpen) && (
                <Stack spacing={3} sx={{ width: { tablet: '416px', mobile: 'auto' } }}>
                    {activeTab === 0 && (
                        <Stack spacing={3}>
                            {isLowerThanLaptop && (
                                <Typography
                                    variant="descriptionSemiBold"
                                    sx={{
                                        [theme.breakpoints.down('laptop')]: {
                                            fontSize: '20px',
                                            lineHeight: '30px',
                                            fontWeight: 400,
                                        },
                                        [theme.breakpoints.down('tablet')]: { fontSize: '16px', lineHeight: '20px' },
                                    }}
                                >
                                    Изменить контрольный вопрос
                                </Typography>
                            )}
                            <ControlQuestion
                                currentQuestion={data?.securityQuestion}
                                onContinue={handleContinueQuestion}
                                buttonText="Сохранить"
                                error={isQuestionError}
                            />
                        </Stack>
                    )}
                    {activeTab === 1 && <ChangePasswordBlock />}

                    <Button variant="secondary" fullWidth={true} onClick={() => navigate(AppRoutes.profileRoute)}>
                        Отмена
                    </Button>
                </Stack>
            )}
            <SuccessDialog
                isOpen={isDialogVisible}
                title="Контрольный вопрос успешно изменен"
                onClose={handleDialogClose}
            />
        </Stack>
    );
};
