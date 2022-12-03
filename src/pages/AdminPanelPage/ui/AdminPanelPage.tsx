import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';

export const AdminPanelPage = memo(() => {
    const { t } = useTranslation('adminPanel');
    return <Page>{t('AdminPanelPage')}</Page>;
});
