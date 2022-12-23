Learning project.

### Architectural design methodology:

[Feature-Sliced Design](https://feature-sliced.design/)

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
* Uploaded to Vercel (some features are not work when project run not on local machine, ex: edit
  profile)

#### Features:

* Custom FSD slice generator with node.js
* Custom babel plugin babelRemovePropsPlugin
* Custom own ESLint
  plugin: [eslint-plugin-fsd-import](https://www.npmjs.com/package/eslint-plugin-fsd-import)
* Code splitting
* Async reducers, async thunk
* Custom refactoring tools with [ts-morph](https://ts-morph.com/)

#### Project

* User Roles, Profiles
* Different article types, comments, filters, search
* Different custom UI controls, Skeletons
* Private routing
