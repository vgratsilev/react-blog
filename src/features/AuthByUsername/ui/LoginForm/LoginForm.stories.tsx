import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import LoginForm from './LoginForm';

export default {
    title: 'features/Login/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

const state = {
    loginForm: { username: '123', password: '123' },
};

const stateWithError = {
    loginForm: { username: '123', password: '123', error: 'Custom error' },
};

const stateLoading = { loginForm: { isLoading: true } };

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator(state)];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator(stateWithError)];

export const WithErrorDark = Template.bind({});
WithErrorDark.args = {};
WithErrorDark.decorators = [StoreDecorator(stateWithError), ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator(stateLoading)];
