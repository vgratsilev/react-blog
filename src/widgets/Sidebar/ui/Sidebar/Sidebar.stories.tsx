import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { userEvent, within } from '@storybook/testing-library';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});

export const LightOpened = Template.bind({});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
LightOpened.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByTestId('sidebar-toggle');
    await userEvent.click(toggleButton);
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOpened = Template.bind({});
DarkOpened.decorators = [ThemeDecorator(Theme.DARK)];
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
DarkOpened.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const toggleButton = await canvas.getByTestId('sidebar-toggle');
    await userEvent.click(toggleButton);
};
