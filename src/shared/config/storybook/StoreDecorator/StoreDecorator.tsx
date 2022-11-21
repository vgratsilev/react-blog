/* eslint-disable indent */
import { Story } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/addCommentForm';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/module/slice';
// import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/module/slice/articleDetailsCommentSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    // articleDetailsComments: articleDetailsCommentsReducer,
    articleDetailsPage: articleDetailsPageReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlesPageReducer,
};

export const StoreDecorator =
    (state: DeepPartial<IStateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
