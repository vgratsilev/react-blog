import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';
import { AppRouter } from './AppRouter';

describe('ap/router/AppRouter', () => {
    test('Page should render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Page not found', async () => {
        componentRender(<AppRouter />, {
            route: '/dasdasd',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect unauthorized user on main', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Access granted to profile page for authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: { user: { authData: {}, _mounted: true } },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Access forbid (no role)', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: { user: { authData: {}, _mounted: true } },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Access granted by role', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: { user: { authData: { roles: [UserRole.ADMIN] }, _mounted: true } },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
