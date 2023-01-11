## Entity Article

Article - entity about something. Article consist of blocks (code, image, text).

Translations used in entity stored in `public/locales/{lang}/article.json`.

#### Public API

- Components
  - `ArticleList` - list of articles.
  - `ArticleDetails` - info about article.

- Types
  - `IArticle` - type to describe article.
  - `IArticleDetailsSchema` - article schema, used to create app store schema.

- Selectors
  - `getArticleDetailsData` - selector to get information about current opened article.

- Constants
  - `ArticleSortField` - fields used to sort articles (views, title, created, etc).
  - `ArticleType` - type of article (IT, JS, food, news, etc).
  - `ArticleView` - type of article list (list or tile view).
  - `ArticleBlockType` - types of article block (code, image, text).
