import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { IArticle } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import { IArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import AvatarTest from 'shared/assets/tests/storybookAvatar.png';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage',
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
Light.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        articleDetailsComments: comments,
    }),
];

export const Dark = Template.bind({});
Dark.decorators = [
    StoreDecorator({
        articleDetails: {
            data: article,
        },
        articleDetailsComments: comments,
    }),
    ThemeDecorator(Theme.DARK),
];
