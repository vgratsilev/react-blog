import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView, IArticle } from '../../model/types/article';
import { ArticleList } from './ArticleList';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

const article = {
    id: '1',
    title: 'Title 1',
    subtitle: 'Subtitle 1',
    img: 'https://cdn2.hexlet.io/store/derivatives/4aa834c7741fe4045ae3e5ecf6179654/fill_webp-850-400.webp',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
    },
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

const getArticlesByView = (view: ArticleView) =>
    new Array(view === ArticleView.TILE ? 9 : 3).fill(0).map((item, index) => ({
        ...article,
        id: String(index),
    }));

const listProps = { articles: getArticlesByView(ArticleView.LIST), view: ArticleView.LIST };
const tileProps = { articles: getArticlesByView(ArticleView.TILE), view: ArticleView.TILE };

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const ListLight = Template.bind({});
ListLight.args = listProps;

export const ListDark = Template.bind({});
ListDark.args = listProps;
ListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListIsLoading = Template.bind({});
ListIsLoading.args = { ...listProps, isLoading: true };

export const TileLight = Template.bind({});
TileLight.args = tileProps;

export const TileDark = Template.bind({});
TileDark.args = tileProps;
TileDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TileIsLoading = Template.bind({});
TileIsLoading.args = { ...tileProps, isLoading: true };

export const NoArticles = Template.bind({});
NoArticles.args = { articles: [], isLoading: false };
