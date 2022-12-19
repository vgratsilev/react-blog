import { IArticleDetailsCommentSchema } from './IArticleDetailsCommentSchema';
import { IArticleDetailsRecommendationsSchema } from './IArticleDetailsRecommendationsSchema';

export interface IArticleDetailsPageSchema {
    comments: IArticleDetailsCommentSchema;
    recommendations: IArticleDetailsRecommendationsSchema;
}
