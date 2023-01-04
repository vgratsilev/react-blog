import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('User not authorized', () => {
        it('Route to Main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Route open Profile Page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });

        it('Route open not existed page', () => {
            cy.visit('/aaasssddd');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('User authorized', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Route open Profile Page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Route open Articles Page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
