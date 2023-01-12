import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';
import '@/shared/config/i18n/i18n';
import '@/app/styles/index.scss';
import App from './app/App';

const container = document.getElementById('root');

if (!container) {
    throw new Error(`root container is not found. Can't mount App.`);
}

const root = createRoot(container);
root.render(
    <BrowserRouter
    // basename={__IS_DEV__ ? '/' : '/react-blog'}
    >
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
