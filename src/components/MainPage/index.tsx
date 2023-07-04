import { Outlet } from 'react-router-dom';

import { PageContainer } from 'src/shared/containers/PageContainer';

export const MainPage = () => (
    <PageContainer theme="white" headerPosition="static">
        <Outlet />
    </PageContainer>
);
