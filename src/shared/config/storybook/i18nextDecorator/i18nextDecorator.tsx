import { Suspense } from 'react';
import { Story } from '@storybook/react';
import i18n from 'shared/config/i18n/i18nForStories';
import { I18nextProvider } from 'react-i18next';

export const i18nextDecorator = (story: () => Story) => (
    <Suspense fallback={<div>{''}</div>}>
        <I18nextProvider i18n={i18n}>{story()}</I18nextProvider>
    </Suspense>
);
