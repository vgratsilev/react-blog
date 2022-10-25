import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
// import { userEvent, within } from '@storybook/testing-library';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

const options = [
    {
        value: '123',
        content: '123',
    },
    {
        value: '456',
        content: '456',
    },
    {
        value: '789',
        content: '789',
    },
];

export const SelectDefault = Template.bind({});
SelectDefault.args = {
    label: 'Label',
    options,
};

export const SelectDark = Template.bind({});
SelectDark.args = {
    label: 'Label',
    options,
};
SelectDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SelectWithoutLabel = Template.bind({});
SelectWithoutLabel.args = {
    options,
};

export const SelectOpened = Template.bind({});
SelectOpened.args = {
    label: 'Label',
    options,
};
// SelectOpened.play = async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const selectBox = await canvas.getByTestId('selectBox');
//     console.log(selectBox);
//     // await userEvent.hover(selectBox);
//     await userEvent.click(selectBox);
// };
