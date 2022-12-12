import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { IArticlesPageSchema } from '../../model/types/articlesPageSchema';
import { ArticlesPageFilters } from './ArticlesPageFilters';

export default {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPageFilters>;

const articles: IArticlesPageSchema = {
    isInited: false,
    isLoading: false,
    error: undefined,
    view: ArticleView.TILE,
    type: ArticleType.ALL,
    page: 1,
    hasMore: true,
    limit: 9,
    ids: [],
    entities: {},
    order: 'asc',
    search: '',
    sort: ArticleSortField.CREATED,
};

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => (
    <ArticlesPageFilters {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ articlesPage: articles })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({ articlesPage: articles }), ThemeDecorator(Theme.DARK)];
