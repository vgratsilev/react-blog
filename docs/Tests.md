## Tests

In project used 4 types of tests:

* Unit tests with [Jest](https://jestjs.io/) - `npm run test:unit`
* Component tests with [React Testing Library](https://testing-library.com/) - `npm run test:unit`
* Screenshot testing with [Loki](https://github.com/oblador/loki) - `npm run test:ui`
* e2e testing with [Cypress](https://www.cypress.io/) - `npm run test:e2e`

### Scripts:

* `npm run test:unit` - run unit tests with Jest
* `npm run test:unit:coverage` - run unit tests with Jest and calculate coverage
* `npm run test:ui` - run screenshot tests with Loki (storybook should be started)
* `npm run test:ui:static` - run screenshot tests with Loki on static storybook files (storybook
  static files should be build)
* `npm run test:ui:ok` - approve screenshot test with Loki
* `npm run test:ui:ci` - run screenshot tests with Loki in CI
* `npm run test:ui:report` - generate full report for screenshot testing
* `npm run test:ui:json` - generate json report for screenshot testing
* `npm run test:ui:html` - generate HTML report for screenshot testing
* `npm run test:e2e` - run e2e tests with Cypress

### Reports:

Reports for unit and screenshot testing are published
to [github pages](https://vgratsilev.github.io/react-blog/).

