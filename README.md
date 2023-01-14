## React blog project

It's my sandbox to try new technologies, tools, etc.

Project available on https://reactblog.ru/. Published to [selectel](https://selectel.ru/en/), but
it's expensive, and I'll change the hosting provider to a cheaper one later.

Project report about unit and screenshot testing are published
to [github pages](https://vgratsilev.github.io/react-blog/).

You can use different users with different roles (and permissions) to login:

- Admin role: username `admin`, pass `123`.
- User role: username `user`, pass `456`.
- Manager role: username `manager`, pass: `789`.

### Architectural design methodology

Project developed with [Feature-Sliced Design](https://feature-sliced.design/) methodology.

### Project

* User Roles, Profiles
* Different article types, comments, filters, search
* Different custom UI controls, Skeletons
* Private routing

#### [List of Entities](/docs/Entities.md)

#### [List of Features](/docs/Features.md)

### Features

* Custom FSD slice generator with node.js
* Custom babel plugin babelRemovePropsPlugin
* Custom own ESLint
  plugin: [eslint-plugin-fsd-import](https://www.npmjs.com/package/eslint-plugin-fsd-import)
* Code splitting
* Async reducers, async thunk
* Custom refactoring tools with [ts-morph](https://ts-morph.com/)
* Supported `En` and `Ru` translations with [i18next](https://www.i18next.com/) library.
  Translations are saved
  in `public/locales`.

---

### Configuration

Project used 2 configs:

* Webpack - `config/build`
* Vite - `vite.config.js`

Both bundlers adapted for apps features.

All config is stored in `config`:

* `config/babel` - babel config
* `config/build` - webpack config
* `config/jest` - jest config
* `config/storybook` - storybook config

Folder `sripts` stored different scripts for refactoring code, create slice, generate reports, etc.

___

### Tests

In project used 4 types of tests:

* Unit tests with [Jest](https://jestjs.io/) - `npm run test:unit`
* Component tests with [React Testing Library](https://testing-library.com/) - `npm run test:unit`
* Screenshot testing with [Loki](https://github.com/oblador/loki) - `npm run test:ui`
* e2e testing with [Cypress](https://www.cypress.io/) - `npm run test:e2e`

More about tests - [documentation](/docs/Tests.md).

---

### Linting

Project used ESLint to check typescript code and Stylelint to check styles code.

To control the main architectural principles of FSD used own custom ESLint
plugin [eslint-plugin-fsd-import](https://www.npmjs.com/package/eslint-plugin-fsd-import) with 3
rules:

* `fsd-relative-path` - forbids using absolute imports within one slice.
* `public-api-imports` - allow imports from other modules only from public API. Has auto fix.
* `layer-imports` - check slices for correct use in terms of FSD (ex.: widgets can't be used in
  features and shared slices).

---

### CI pipeline and pre-commit hooks

Config for GitHub Actions is stored in `.githib/workflows`. CI used to run linters, tests, build
project and storybook, upload unit & screenshot reports to GitHub Pages.

Pre-commit hooks used to check code with linters, create build. Config is stored in `/.husky`.

---

### Work with data

Tool used to work with data is [redux toolkit](https://redux-toolkit.js.org/). If it is possible,
re-usable entities should be normalized
with [EntityAdaptor](https://redux-toolkit.js.org/api/createEntityAdapter).

Server queries with [RTK query](https://redux-toolkit.js.org/rtk-query/overview)

For adding async reducers
used [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx) (
the reason is to not add them to main bundle).

---

### Storybook

For each component is created story-case.

Request on server mocked
with [storybook-addon-mock](https://github.com/nutboltu/storybook-addon-mock).

File with story-cases is created near the component with extension `.story.tsx`.

___

### How to start project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - starts server + frontend
```

---

### Scripts

#### Start and build

* `npm run start` - run frontend with Webpack on http://localhost:3000/
* `npm run start:vite` - run frontend with Vite on http://localhost:5173/
* `npm run start:dev:server` - run backend on http://localhost:8000/
* `npm run start:dev` - run backend + frontend with Webpack
* `npm run start:dev:vite` - run backend + frontend with Vite
* `npm run build:dev` - build in dev mode
* `npm run build:prod` - build in prod mode

#### Linting

* `npm run lint:ts` - check TS files with ESLint
* `npm run lint:ts:fix` - fix TS files with ESLint
* `npm run lint:scss` - check scss files with Stylelint
* `npm run lint:scss:fix` - fix scss files with Stylelint

#### Storybook

* `npm run start:storybook` - run storybook on http://localhost:6006/
* `npm run storybook:build` - create storybook build
* `start:storybook:static` - create storybook build for CI

#### Testing

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

#### Tools

* `npm run analyzer:dev` - analyzing dev bundle size
* `npm run analyzer:prod` - analyzing prod bundle size
* `npm run generate:slice` - script for creating FSD slice

---

### Tools:

* Bundler: [Webpack](https://webpack.js.org/)
  * and [Vite](https://vitejs.dev/) for dev bundle.
* JavaScript Compiler: [Babel](https://babeljs.io/)
  * Check Circular Dependency
    with [circular-dependency-plugin](https://github.com/aackerman/circular-dependency-plugin)
  * Bundle size check
    with [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
  * Typescripts check with babel-loader
    and [fork-ts-checker-webpack-plugin](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)
* SVG loader: [SVGR](https://react-svgr.com/)
* CSS: [SASS](https://sass-lang.com/) & [CSS Modules](https://github.com/css-modules/css-modules)
* [Typescript](https://www.typescriptlang.org/)
* State library: [Redux-Toolkit](https://redux-toolkit.js.org/) with slices, RTK Query,
  EntityAdapter, Normalizing State Shape.
* [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)
  & [EditorConfig](https://editorconfig.org/)
  & [Stylelint](https://stylelint.io/)
* Pre-commit checks with [Husky](https://github.com/typicode/husky)
* Internationalization: [i18next](https://www.i18next.com/)
  * ~~Extract plugin [babel-plugin-i18next-extract](https://i18next-extract.netlify.app/#/)~~
* Testing:
  * [Jest](https://jestjs.io/) (+ [jest-dom](https://github.com/testing-library/jest-dom))
  * [React Testing Library](https://testing-library.com/)
* [Storybook](https://storybook.js.org/)
  * Visual Regression testing with [Loki](https://github.com/oblador/loki) and html
    reporter [REG CLI](https://github.com/reg-viz/reg-cli)
  * Mock storybook API requests
    with [storybook-addon-mock](https://github.com/nutboltu/storybook-addon-mock)
* Some components based on [Headless UI kit](https://headlessui.com/)
* [use-gesture](https://github.com/pmndrs/use-gesture) is a library that lets you bind
  richer mouse and touch events to any component or
  view. Worked with an animation library [react-spring](https://github.com/pmndrs/react-spring)

### Backend:

* Server: imitation with [json-server](https://github.com/typicode/json-server)
* ~~Uploaded to Vercel (some features are not work when project run not on local machine, ex: edit
  profile)~~
* Uploaded to [selectel](https://selectel.ru/en/) can be reached by https://reactblog.ru.
