/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import { render } from '@testing-library/react';
import { ReactNode, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface IComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export function componentRender(component: ReactNode, options: IComponentRenderOptions = {}) {
    const { route = '/', initialState, asyncReducers } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                initialState={initialState}
                asyncReducers={asyncReducers}
            >
                <I18nextProvider i18n={i18nForTests}>
                    <Suspense fallback={<div>{''}</div>}>{component}</Suspense>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
