// eslint-disable-next-line fsd-import/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';
// eslint-disable-next-line fsd-import/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
