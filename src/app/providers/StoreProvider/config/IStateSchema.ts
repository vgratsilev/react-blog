import { ICounterSchema } from 'entities/Counter';
import { IUserSchema } from 'entities/User';
import { ILoginSchema } from 'features/AuthByUsername';
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { IProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
// import { NavigateOptions, To } from 'react-router-dom';
import { IArticleDetailsSchema } from 'entities/Article';
// import {
//     IArticleDetailsCommentSchema,
//     IArticleDetailsRecommendationsSchema,
// } from 'pages/ArticleDetailsPage';
import { IAddCommentFormSchema } from 'features/addCommentForm';
import { IArticlesPageSchema } from 'pages/ArticlesPage';
import { IRestoreScrollSchema } from 'features/restoreScroll';
import { IArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { rtkApi } from 'shared/api/rtkApi';

export interface IStateSchema {
    counter: ICounterSchema;
    user: IUserSchema;
    restoreScroll: IRestoreScrollSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    // async reducers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    // articleDetailsComments?: IArticleDetailsCommentSchema;
    // articleDetailsRecommendations?: IArticleDetailsRecommendationsSchema;
    addCommentForm?: IAddCommentFormSchema;
    articlesPage?: IArticlesPageSchema;
    articleDetailsPage?: IArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof IStateSchema;

// export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>;
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager;
}

export interface IThunkExtraArg {
    api: AxiosInstance;
    // navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface IThunkConfig<T> {
    rejectValue: T;
    extra: IThunkExtraArg;
    state: IStateSchema;
}
