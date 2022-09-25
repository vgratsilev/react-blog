import { lazy } from 'react';

export const AboutPageAsync = lazy(() => import('./AboutPage'));

// for testing PageLoader
// export const AboutPageAsync = lazy(
//     () =>
//         new Promise((resolve) => {
//             setTimeout(() => {
//                 // @ts-ignore
//                 resolve(import('./AboutPage'));
//             }, 100000);
//         }),
// );
