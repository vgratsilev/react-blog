import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
// import { BugButton } from 'app/providers/ErrorBoundary';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid={'MainPage'}>
            {/* <BugButton /> */}
            {t('MainPage')}
        </Page>
    );
};

export default MainPage;
