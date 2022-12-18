import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { userEvent, within } from '@storybook/testing-library';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({ user: { authData: {} } })];

export const LightOpened = Template.bind({});
LightOpened.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByTestId('sidebar-toggle');
    await userEvent.click(toggleButton);
};
LightOpened.decorators = [StoreDecorator({ user: { authData: {} } })];

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({ user: { authData: {} } }), ThemeDecorator(Theme.DARK)];

export const DarkOpened = Template.bind({});
DarkOpened.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByTestId('sidebar-toggle');
    await userEvent.click(toggleButton);
};
DarkOpened.decorators = [StoreDecorator({ user: { authData: {} } }), ThemeDecorator(Theme.DARK)];

export const NoAuth = Template.bind({});
NoAuth.decorators = [StoreDecorator({ user: {} })];

export const NoAuthOpened = Template.bind({});
NoAuthOpened.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByTestId('sidebar-toggle');
    await userEvent.click(toggleButton);
};
NoAuthOpened.decorators = [StoreDecorator({ user: {} })];
