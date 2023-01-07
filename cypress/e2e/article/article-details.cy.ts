let currentArticleId = '';
describe('User enter the article details page', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${currentArticleId}`);
        });
    });

    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });

    // describe('Work with API', () => {});
    it('User see articles details', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it('User see articles recommendations list', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it('User added comment to article', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('  test text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('User set rating to article', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback text');
        cy.get('[data-selected=true]').should('have.length', 4);
    });

    it('User set rating to article (with stubs on fixtures)', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' });

        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback text');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
