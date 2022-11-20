import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { IArticle } from 'entities/Article';
import { IArticleDetailsRecommendationsSchema } from '../types/IArticleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<IStateSchema>(
    (state) => state.articleDetailsRecommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchCommentsByArticleId.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(
    //             fetchCommentsByArticleId.fulfilled,
    //             (state, action: PayloadAction<IComment[]>) => {
    //                 state.isLoading = false;
    //                 recommendationsAdapter.setAll(state, action.payload);
    //             },
    //         )
    //         .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsRecommendationsSlice;
