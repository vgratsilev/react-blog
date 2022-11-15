import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarTest from 'shared/assets/tests/storybookAvatar.png';
import { IArticlesPageSchema } from 'pages/ArticlesPage';
import { ArticleView, IArticle } from 'entities/Article';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlePage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const article = {
    id: '1',
    title: 'Title 1',
    subtitle: 'Subtitle 1',
    img: 'https://cdn2.hexlet.io/store/derivatives/4aa834c7741fe4045ae3e5ecf6179654/fill_webp-850-400.webp',
    user: { id: '1', username: 'Admin', avatar: AvatarTest },
    views: 420,
    created_dt: '31.10.2022',
    type: ['IT', 'JS'],
    blocks: [
        {
            id: '1',
            type: 'text',
            title: 'block title',
            paragraphs: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo ipsum itaque laborum, omnis possimus? Alias aperiam eius est facere necessitatibus nisi nobis nulla, numquam, porro quam tenetur veritatis vero voluptatum. Commodi distinctio dolor eligendi esse facere ipsum labore laborum libero minima omnis placeat quam recusandae, repellat sed sit voluptas!',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo ipsum itaque laborum, omnis possimus? Alias aperiam eius est facere necessitatibusero voluptatum. Commodi distinctio dolor eligendi esse facere ipsum labore laborum libero minima omnis placeat quam recusandae, repellat sed sit voluptas!',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo ipsum itaque laborum, omnis possimus? Alias aperiam eius est facere necessitatibus nisi nobis nulla, numquam, porro quam tenetur veritatis vero voluptatum. Commodi distinctio ',
            ],
        },
        {
            id: '2',
            type: 'code',
            code: 'put some code here',
        },
        {
            id: '3',
            type: 'image',
            src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ZDtqrBOj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/js_thanks.png%3Fraw%3Dtrue',
            alt: 'js image',
            title: 'Just JS',
        },
    ],
} as IArticle;

const articles: IArticlesPageSchema = {
    isInited: false,
    isLoading: false,
    error: undefined,
    view: ArticleView.TILE,
    page: 1,
    hasMore: true,
    limit: 9,
    ids: ['1', '2', '3'],
    entities: {
        '1': {
            ...article,
            id: '1',
            user: { id: '1', username: 'Admin', avatar: AvatarTest },
        },
        '2': {
            ...article,
            id: '2',
            title: 'JavaScript news',
            user: { id: '2', username: 'John' },
        },
        '3': {
            ...article,
            id: '3',
            title: 'Golang for sure',
            user: { id: '1', username: 'Admin', avatar: AvatarTest },
        },
    },
};

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const ListViewLight = Template.bind({});
ListViewLight.args = {};
ListViewLight.decorators = [
    StoreDecorator({
        articlesPage: {
            ...articles,
            view: ArticleView.LIST,
        },
    }),
];

export const ListViewLightIsLoading = Template.bind({});
ListViewLightIsLoading.args = {};
ListViewLightIsLoading.decorators = [
    StoreDecorator({
        articlesPage: {
            ...articles,
            isLoading: true,
            view: ArticleView.LIST,
        },
    }),
];

export const ListViewDark = Template.bind({});
ListViewDark.args = {};
ListViewDark.decorators = [
    StoreDecorator({
        articlesPage: {
            ...articles,
            view: ArticleView.LIST,
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const ListViewDarkIsLoading = Template.bind({});
ListViewDarkIsLoading.args = {};
ListViewDarkIsLoading.decorators = [
    StoreDecorator({
        articlesPage: {
            ...articles,
            isLoading: true,
            view: ArticleView.LIST,
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const TileViewLight = Template.bind({});
TileViewLight.args = {};
TileViewLight.decorators = [
    StoreDecorator({
        articlesPage: {
            ...articles,
            view: ArticleView.TILE,
        },
    }),
];

export const TileViewLightIsLoading = Template.bind({});
TileViewLightIsLoading.args = {};
TileViewLightIsLoading.decorators = [
    StoreDecorator({
        articlesPage: {
            ...articles,
            isLoading: true,
            view: ArticleView.TILE,
        },
    }),
];

export const TileViewDark = Template.bind({});
TileViewDark.args = {};
TileViewDark.decorators = [
    StoreDecorator({
        articlesPage: {
            ...articles,
            view: ArticleView.TILE,
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const TileViewDarkIsLoading = Template.bind({});
TileViewDarkIsLoading.args = {};
TileViewDarkIsLoading.decorators = [
    StoreDecorator({
        articlesPage: {
            ...articles,
            isLoading: true,
            view: ArticleView.TILE,
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const LoadingError = Template.bind({});
LoadingError.args = {};
LoadingError.decorators = [
    StoreDecorator({
        articlesPage: {
            ids: [],
            entities: {},
            error: 'test',
        },
    }),
];
