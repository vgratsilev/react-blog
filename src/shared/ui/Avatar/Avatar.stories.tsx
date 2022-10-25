import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './storybookAvatar.png';

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

export const AvatarAltText = Template.bind({});
AvatarAltText.args = {
    alt: 'No image',
};
