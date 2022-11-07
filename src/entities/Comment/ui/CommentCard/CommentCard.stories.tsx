import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { IComment } from 'entities/Comment';
import AvatarTest from 'shared/assets/tests/storybookAvatar.png';
import { CommentCard } from './CommentCard';

export default {
    title: 'shared/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

const comment: IComment = {
    id: '1',
    text: 'comment 1',
    user: { id: '1', username: 'user 1', avatar: AvatarTest },
};

export const Light = Template.bind({});
Light.args = { comment };

export const Dark = Template.bind({});
Dark.args = { comment };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoadingLight = Template.bind({});
IsLoadingLight.args = { isLoading: true };

export const IsLoadingDark = Template.bind({});
IsLoadingDark.args = { isLoading: true };
IsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
