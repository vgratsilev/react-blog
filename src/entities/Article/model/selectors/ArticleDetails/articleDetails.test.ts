import { IStateSchema } from 'app/providers/StoreProvider';
import { ArticleBlockType, ArticleType, IArticle } from '../../types/article';
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

        const state: DeepPartial<IStateSchema> = {
            articleDetails: { data },
        };

        expect(getArticleDetailsData(state as IStateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticleDetailsData(state as IStateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsError', () => {
    test('should return error', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetails: { error: '123' },
        };

        expect(getArticleDetailsError(state as IStateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticleDetailsError(state as IStateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<IStateSchema> = {
            articleDetails: { isLoading: true },
        };

        expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getArticleDetailsIsLoading(state as IStateSchema)).toEqual(false);
    });
});
