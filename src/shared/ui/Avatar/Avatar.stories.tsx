import { ComponentMeta, ComponentStory } from '@storybook/react';
import AvatarImg from 'shared/assets/tests/storybookAvatar.png';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
    src: AvatarImg,
};

export const AvatarBig = Template.bind({});
AvatarBig.args = {
    src: AvatarImg,
    size: 250,
};

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
    alt: 'No image',
};
