import { FC, lazy } from 'react';
import { IArticleEditPageProps } from './ArticleEditPage';

export const ArticleEditPageAsync = lazy<FC<IArticleEditPageProps>>(() =>
    import('./ArticleEditPage').then((component) => ({ default: component.ArticleEditPage })),
);
