import { combineReducers } from '@reduxjs/toolkit';
import { IArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice';
import { articleDetailsPageRecommendationsReducer } from './articleDetailsRecommendationsSlice';

// export const articleDetailsPageReducer = {
//     comments: articleDetailsCommentReducer,
//     recommendations: articleDetailsPageRecommendationsReducer,
// };

export const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsPageRecommendationsReducer,
});
