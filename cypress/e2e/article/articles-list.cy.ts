describe('User enter the Articles Page with list of articles', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });

    it('Articles successfully loaded', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it('Articles successfully loaded (with stubs on fixtures)', () => {
        // use file
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });

        // use data from request
        // cy.intercept('GET', '**/articles?*', (req) => {
        //     req.
        // });

        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });

    it.skip('Example of skipped test', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
        cy.getByTestId('ArticleList1').should('exist'); // error - not found
    });
});
