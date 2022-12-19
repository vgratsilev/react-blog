/* eslint-disable indent */
import { Story } from '@storybook/react';
import { IStateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/addCommentForm/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { profileReducer } from '@/features/editableProfileCard/testing';
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
