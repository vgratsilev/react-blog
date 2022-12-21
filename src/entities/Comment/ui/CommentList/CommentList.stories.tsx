import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarTest from '@/shared/assets/tests/storybookAvatar.png';
import { Theme } from '@/shared/const/theme';
import { IComment } from '../../model/types/comment';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const comments: IComment[] = [
    {
        id: '1',
        text: 'comment 1',
        user: { id: '1', username: 'user 1', avatar: AvatarTest },
    },
    { id: '2', text: 'comment 2', user: { id: '2', username: 'user 2' } },
    {
        id: '3',
        text: 'comment 3',
        user: { id: '1', username: 'user 1', avatar: AvatarTest },
    },
];

export const Light = Template.bind({});
Light.args = { comments };

export const Dark = Template.bind({});
Dark.args = { comments };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoadingLight = Template.bind({});
IsLoadingLight.args = { comments, isLoading: true };

export const IsLoadingDark = Template.bind({});
IsLoadingDark.args = { comments, isLoading: true };
IsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NoCommentsLight = Template.bind({});
NoCommentsLight.args = {};

export const NoCommentsDark = Template.bind({});
NoCommentsDark.args = {};
NoCommentsDark.decorators = [ThemeDecorator(Theme.DARK)];
