/* eslint-disable react-hooks/rules-of-hooks */
import { Suspense, useEffect } from 'react';
import { Story, StoryContext } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

export const i18nextDecorator = (StoryComponent: Story, context: StoryContext) => {
    const {
        globals: { locale },
    } = context;

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <Suspense fallback={<div>{''}</div>}>
            <I18nextProvider i18n={i18n}>
                <StoryComponent />
            </I18nextProvider>
        </Suspense>
    );
};
