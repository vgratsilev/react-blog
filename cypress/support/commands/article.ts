import { IArticle } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Cypress Testing Article',
    subtitle: 'Subtitle 1',
    img: 'https://cdn2.hexlet.io/store/derivatives/4aa834c7741fe4045ae3e5ecf6179654/fill_webp-850-400.webp',
    userId: '1',
    views: 420,
    created_dt: '31.10.2022',
    type: ['IT', 'JS'],
    blocks: [],
};

export const createArticle = (article?: IArticle) =>
    cy
        .request({
            method: 'POST',
            url: `http://localhost:8000/articles`,
            headers: { authorization: 'testing' },
            body: article ?? defaultArticle,
        })
        .then(({ body }) => body);

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'testing' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: IArticle): Chainable<IArticle>;

            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
