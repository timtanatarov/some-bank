import { Box, Link } from '@mui/material';

import AppStore from 'src/images/DownloadImages/AppStore_button.png';
import GooglePlay from 'src/images/DownloadImages/GooglePlay_button.png';

export const MobileStoreButtons = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                width: '339px',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <Link href="#">
                <Box component="img" src={AppStore} width="161px" />
            </Link>
            <Link href="#">
                <Box component="img" src={GooglePlay} width="161px" />
            </Link>
        </Box>
    );
};
