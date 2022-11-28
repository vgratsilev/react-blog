import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { IListBoxItem, ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ListBox>;

const items: IListBoxItem[] = [
    { value: 'option1', content: 'option1', disabled: false },
    { value: 'option2', content: 'option2', disabled: false },
    { value: 'option3', content: 'option3', disabled: true },
];

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Light = Template.bind({});
Light.args = { items, value: 'option2', defaultValue: 'Select option' };

export const Dark = Template.bind({});
Dark.args = { items, value: 'option2', defaultValue: 'Select option' };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithLabel = Template.bind({});
WithLabel.args = { items, value: 'option2', defaultValue: 'Select option', label: 'label text' };

export const Disabled = Template.bind({});
Disabled.args = { items, value: 'option2', defaultValue: 'Select option', readonly: true };

export const WithoutOptions = Template.bind({});
WithoutOptions.args = { items: [], defaultValue: 'Select option' };
