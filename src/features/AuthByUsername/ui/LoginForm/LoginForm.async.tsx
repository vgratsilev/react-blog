import { FC, lazy } from 'react';
import { ILoginFormProps } from './LoginForm';

// export const LoginFormAsync = lazy(() => import('./LoginForm'));

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                resolve(import('./LoginForm'));
            }, 2000);
        }),
);
