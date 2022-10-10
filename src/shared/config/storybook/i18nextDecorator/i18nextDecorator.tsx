/* eslint-disable react-hooks/rules-of-hooks */
import { Suspense, useEffect } from 'react';
import { Story, StoryContext } from '@storybook/react';
import i18n from 'shared/config/i18n/i18nForStories';
import { I18nextProvider } from 'react-i18next';

export const i18nextDecorator = (story: () => Story, context: StoryContext) => {
    const {
        globals: { locale },
    } = context;

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <Suspense fallback={<div>{''}</div>}>
            <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>
        </Suspense>
    );
};
