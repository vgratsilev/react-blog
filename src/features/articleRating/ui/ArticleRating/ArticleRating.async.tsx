import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { lazy, Suspense } from 'react';
import { IArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() =>
    import('./ArticleRating').then((component) => ({ default: component.ArticleRating })),
);

export const ArticleRatingAsync = (props: IArticleRatingProps) => (
    <Suspense
        fallback={
            <Skeleton
                width={'100%'}
                height={120}
            />
        }
    >
        <ArticleRatingLazy {...props} />
    </Suspense>
);
