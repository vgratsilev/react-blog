import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarTest from '@/shared/assets/tests/storybookAvatar.png';
import { IArticleDetailsCommentSchema } from '../../model/types/IArticleDetailsCommentSchema';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

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

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <ArticleDetailsComments {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [
    StoreDecorator({
        articleDetailsPage: {
            comments,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        articleDetailsPage: {
            comments,
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const NoComments = Template.bind({});
NoComments.args = {};
NoComments.decorators = [StoreDecorator({})];

export const NoCommentsDark = Template.bind({});
NoCommentsDark.args = {};
NoCommentsDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
