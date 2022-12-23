import { IStateSchema } from '@/app/providers/StoreProvider';
import { ArticleBlockType, ArticleType } from '../../consts/articleConsts';
import { IArticle } from '../../types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';

describe('getArticleDetailsData', () => {
    test('should return article object', () => {
        const data: IArticle = {
            id: '1',
            title: 'test title',
            subtitle: 'test subtitle',
            user: {
                id: '1',
                username: 'admin',
            },
            views: 555,
            type: [ArticleType.IT],
            created_dt: '04.11.2022',
            img: 'some link',
            blocks: [
                {
                    id: '1',
                    type: ArticleBlockType.TEXT,
                    title: 'test title',
                    paragraphs: ['123', '456'],
                },
            ],
        };

        const state: TDeepPartial<IStateSchema> = {
            articleDetails: { data },
        };

        expect(getArticleDetailsData(state as IStateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticleDetailsData(state as IStateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsError', () => {
    test('should return error', () => {
        const state: TDeepPartial<IStateSchema> = {
            articleDetails: { error: '123' },
        };

        expect(getArticleDetailsError(state as IStateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticleDetailsError(state as IStateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading', () => {
    test('should return isLoading', () => {
        const state: TDeepPartial<IStateSchema> = {
            articleDetails: { isLoading: true },
        };

        expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: TDeepPartial<IStateSchema> = {};
        expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(false);
    });
});
