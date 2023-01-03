import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleType, IArticle, ArticleBlockType } from '@/entities/Article';
import AvatarTest from '@/shared/assets/tests/storybookAvatar.png';
import { Theme } from '@/shared/const/theme';
import { IArticleDetailsCommentSchema } from '../../model/types/IArticleDetailsCommentSchema';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { testId: '1' },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
    <ArticleDetailsPage {...args} />
);

const article: IArticle = {
    id: '1',
    title: 'Title 1',
    subtitle: 'Subtitle 1',
    img: 'https://cdn2.hexlet.io/store/derivatives/4aa834c7741fe4045ae3e5ecf6179654/fill_webp-850-400.webp',
    user: {
        id: '1',
        username: 'admin',
    },
    views: 420,
    created_dt: '31.10.2022',
    type: [ArticleType.IT, ArticleType.JS],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'block title',
            paragraphs: [
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo ipsum itaque laborum, omnis possimus? Alias aperiam eius est facere necessitatibus nisi nobis nulla, numquam, porro quam tenetur veritatis vero voluptatum. Commodi distinctio dolor eligendi esse facere ipsum labore laborum libero minima omnis placeat quam recusandae, repellat sed sit voluptas!',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo ipsum itaque laborum, omnis possimus? Alias aperiam eius est facere necessitatibusero voluptatum. Commodi distinctio dolor eligendi esse facere ipsum labore laborum libero minima omnis placeat quam recusandae, repellat sed sit voluptas!',
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illo ipsum itaque laborum, omnis possimus? Alias aperiam eius est facere necessitatibus nisi nobis nulla, numquam, porro quam tenetur veritatis vero voluptatum. Commodi distinctio ',
            ],
        },
        {
            id: '2',
            type: ArticleBlockType.CODE,
            code: 'put some code here',
        },
        {
            id: '3',
            type: ArticleBlockType.IMAGE,
            src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--ZDtqrBOj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://github.com/damiancipolat/js_vs_memes/blob/master/doc/js_thanks.png%3Fraw%3Dtrue',
            alt: 'js image',
            title: 'Just JS',
        },
    ],
};

const articlesList: IArticle[] = [
    { ...article },
    {
        ...article,
        id: '2',
        title: 'Python Title',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png',
    },
    {
        ...article,
        id: '3',
        title: 'GO news',
        img: 'https://what-about-technology.ru/wp-content/uploads/2021/08/golang.png',
    },
];

const comments: IArticleDetailsCommentSchema = {
    isLoading: false,
    error: undefined,
    ids: ['1', '2', '3'],
    entities: {
        '1': {
            id: '1',
            text: 'comment 1',
            user: { id: '1', username: 'Admin', avatar: AvatarTest },
        },
        '2': { id: '2', text: 'comment 2', user: { id: '2', username: 'John' } },
        '3': {
            id: '3',
            text: 'comment 3',
            user: { id: '1', username: 'Admin', avatar: AvatarTest },
        },
    },
};

export const Light = Template.bind({});
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: articlesList,
        },
        {
            url: `${__API__}/articleRatings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 4 }],
        },
    ],
};
Light.decorators = [
    StoreDecorator({
        user: { authData: { id: '1' } },
        articleDetails: {
            data: article,
        },
        articleDetailsPage: {
            comments,
        },
    }),
];

export const Dark = Template.bind({});
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: articlesList,
        },
        {
            url: `${__API__}/articleRatings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 4 }],
        },
    ],
};
Dark.decorators = [
    StoreDecorator({
        user: { authData: { id: '1' } },
        articleDetails: {
            data: article,
        },
        articleDetailsPage: {
            comments,
        },
    }),
    ThemeDecorator(Theme.DARK),
];
