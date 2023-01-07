import { login, getByTestId } from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import { addComment } from './commands/comments';
import { setRate } from './commands/rating';

Cypress.Commands.add('login', login);
Cypress.Commands.add('getByTestId', getByTestId);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.add('addComment', addComment);
Cypress.Commands.add('setRate', setRate);

// Cypress.Commands.overwrite('intercept', () => {
//     const { FIXTURE_MODE } = process.env;
//
//     // example how to create fixture name and keep it fresh
//     // const fixtureName = req.method + req.url + hash(req.body);
//
//     if (FIXTURE_MODE === 'READ') {
//         // readFixture(fixtureName);
//     }
//
//     if (FIXTURE_MODE === 'WRITE') {
//         // example how to create fixture
//         // createFixture(fixtureName, req.body);
//     }
// });

export {};
