import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <>
            <div>{t('about:testExtract')}</div>
            <div>{t('about:AboutPage')}</div>
        </>
    );
};

export default AboutPage;
