describe('Routing', () => {
    describe('User not authorized', () => {
        it('Route to Main page', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Route open Profile Page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });

        it('Route open not existed page', () => {
            cy.visit('/aaasssddd');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });

    describe('User authorized', () => {
        beforeEach(() => {
            cy.login();
        });

        it('Route open Profile Page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('ProfilePage').should('exist');
        });

        it('Route open Articles Page', () => {
            cy.visit('/articles');
            cy.getByTestId('ArticlesPage').should('exist');
        });
    });
});
