import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n.use(
    resourcesToBackend((language, namespace, callback) => {
        import(`../../../../public/locales/${language}/${namespace}.json`)
            .then((resources) => {
                callback(null, resources);
            })
            .catch((error) => {
                callback(error, null);
            });
    }),
)
    .use(initReactI18next)
    .init({
        lng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
