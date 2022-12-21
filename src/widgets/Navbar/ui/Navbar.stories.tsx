import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import TestAvatar from '@/shared/assets/tests/storybookAvatar.png';
import { Theme } from '@/shared/const/theme';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];

export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [
    StoreDecorator({
        user: {
            authData: {
                username: 'admin',
                avatar: TestAvatar,
            },
        },
    }),
];

export const AuthDark = Template.bind({});
AuthDark.args = {};
AuthDark.decorators = [
    StoreDecorator({ user: { authData: { username: 'admin', avatar: TestAvatar } } }),
    ThemeDecorator(Theme.DARK),
];
