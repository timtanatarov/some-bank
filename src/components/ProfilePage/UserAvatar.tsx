import { useState } from 'react';

import { Avatar, Badge, CircularProgress } from '@mui/material';

import { AvatarIcon } from 'src/shared/icons';

import { PhotoIcon } from 'src/shared/icons/Photo';
import { CloseIcon } from 'src/shared/icons/Close';

import { colors } from 'src/theme';

type AvatarProps = {
    imgUrl: string;
    loading: boolean;
    onDeleteClientAvatar: () => void;
    onOpenFileModal: () => void;
};
export const UserAvatar = ({ imgUrl, onDeleteClientAvatar, onOpenFileModal, loading }: AvatarProps) => {
    const [isAvatarHovered, setIsAvatarHovered] = useState<boolean>(false);
    return (
        <Badge
            overlap="circular"
            sx={{
                '.MuiBadge-badge': {
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    background: colors.secondary200,
                },
                '&:hover': {
                    cursor: 'pointer',
                },
                '&:hover::after': {
                    content: '"Изменить фото"',
                    display: 'block',
                    width: '100px',
                    height: '50px',
                    textAlign: 'center',
                    position: 'absolute',
                    color: colors.neutral0,
                    fontSize: '16px',
                    top: '38px',
                    left: '12px',
                },
            }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
                imgUrl && imgUrl !== 'Not found image' ? (
                    <CloseIcon onClick={onDeleteClientAvatar} />
                ) : (
                    <PhotoIcon onClick={onOpenFileModal} />
                )
            }
            onMouseOver={() => setIsAvatarHovered(true)}
            onMouseLeave={() => setIsAvatarHovered(false)}
        >
            {imgUrl && imgUrl !== 'Not found image' ? (
                <Avatar
                    alt="Фотография пользователя"
                    sx={{
                        height: '124px',
                        width: '124px',
                        filter: isAvatarHovered ? 'brightness(70%)' : '',
                    }}
                    src={imgUrl as string}
                />
            ) : (
                <>
                    <AvatarIcon
                        sx={{
                            width: '124px',
                            height: '124px',
                            filter: isAvatarHovered ? 'brightness(70%)' : '',
                        }}
                    />
                    {loading && (
                        <CircularProgress
                            size={124}
                            sx={{
                                color: colors.secondary200,
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-62px',
                                marginLeft: '-62px',
                            }}
                        />
                    )}
                </>
            )}
        </Badge>
    );
};
