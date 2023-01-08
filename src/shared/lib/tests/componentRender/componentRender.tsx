/* eslint-disable react-perf/jsx-no-new-array-as-prop,react-perf/jsx-no-new-object-as-prop */
import { render } from '@testing-library/react';
import {
    ReactNode,
    // Suspense
} from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
// import i18n from '@/shared/config/i18n/i18n';
import { MemoryRouter } from 'react-router-dom';
import { IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line fsd-import/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
// eslint-disable-next-line fsd-import/layer-imports
import '@/app/styles/index.scss';

export interface IComponentRenderOptions {
    route?: string;
    initialState?: TDeepPartial<IStateSchema>;
    asyncReducers?: TDeepPartial<ReducersMapObject<IStateSchema>>;
    theme?: Theme;
}

interface ITestProviderProps {
    children: ReactNode;
    options?: IComponentRenderOptions;
}

export function TestProvider(props: ITestProviderProps) {
    const { children, options = {} } = props;
    const { route = '/', initialState, asyncReducers, theme = Theme.LIGHT } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState}
                asyncReducers={asyncReducers}
            >
                <I18nextProvider i18n={i18nForTests}>
                    <ThemeProvider initialTheme={theme}>
                        {/* <Suspense fallback={<div>{''}</div>}> */}
                        <div className={`app ${theme}`}>{children}</div>
                        {/* </Suspense> */}
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(component: ReactNode, options: IComponentRenderOptions = {}) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
