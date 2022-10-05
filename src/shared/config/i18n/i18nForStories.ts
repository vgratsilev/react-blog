import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import ChainedBackend from 'i18next-chained-backend';
// import HttpBackend from 'i18next-http-backend';
// import resourcesToBackend from 'i18next-resources-to-backend';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// i18n.use(ChainedBackend)
//     // .use(initReactI18next)
//     .init({
//         lng: 'en',
//         fallbackLng: 'ru',
//         backend: {
//             backends: [
//                 HttpBackend,
//                 // if a namespace can't be loaded via normal http-backend loadPath, then the inMemoryLocalBackend will try to return the correct resources
//                 resourcesToBackend((language, namespace, callback) => {
//                     import(`../public/locales/${language}/${namespace}.json`)
//                         .then(({ default: resources }) => {
//                             callback(null, resources);
//                         })
//                         .catch((error) => {
//                             callback(error, null);
//                         });
//                 }),
//             ],
//             backendOptions: [
//                 {
//                     loadPath: 'http://localhost:8080/public/locales/{{lng}}/{{ns}}.json',
//                 },
//             ],
//         },
//         debug: false,
//         interpolation: {
//             escapeValue: false, // not needed for react!!
//         },
//
//         // resources: { en: { translations: {} } },
//     });

// i18n.use(
//     resourcesToBackend((language, namespace, callback) => {
//         import(`../public/locales/${language}/${namespace}.json`)
//             .then((resources) => {
//                 callback(null, resources);
//             })
//             .catch((error) => {
//                 callback(error, null);
//             });
//     }),
// )

// i18n.use(HttpBackend).init({
//     backend: {
//         // for all available options read the backend's repository readme file
//         loadPath: 'public/locales/{{lng}}/{{ns}}.json',
//     },

i18n.use(initReactI18next).init({
    lng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false, // not needed for react!!
    },

    resources: {
        en: {
            translation: {
                MainPage: 'Main Page',
                ReloadThisPage: 'Reload this page',
                SomethingWentWrong: 'Something went wrong...',
                Translate: 'Change language',
                throwError: 'Throw error',
                Toggle: 'Toggle',
                MainPageLink: 'Main',
                AboutPageLink: 'About',
            },
            about: {
                AboutPage: 'About Page',
            },
            notFound: {
                pageNotFound: 'Page not found!',
            },
        },
    },
});

export default i18n;
