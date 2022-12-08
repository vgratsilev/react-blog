import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
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

const shiftDecorator = (Story: Story) => (
    <div style={{ padding: 200, display: 'inline-block' }}>
        <Story />
    </div>
);

const items: IListBoxItem[] = [
    { value: 'option1', content: 'option big content 1', disabled: false },
    { value: 'option2', content: 'option big content 2', disabled: false },
    { value: 'option3', content: 'option big content 3', disabled: true },
];

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Light = Template.bind({});
Light.args = { items, value: 'option2', defaultValue: 'Select' };

export const Dark = Template.bind({});
Dark.args = { items, value: 'option2', defaultValue: 'Select' };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithLabelDirectionLeft = Template.bind({});
WithLabelDirectionLeft.args = {
    items,
    value: 'option2',
    defaultValue: 'Select',
    label: 'label text',
    direction: 'bottom left',
};

export const WithLabelDirectionRight = Template.bind({});
WithLabelDirectionRight.args = {
    items,
    value: 'option2',
    defaultValue: 'Select',
    label: 'label text',
    direction: 'bottom right',
};

export const Disabled = Template.bind({});
Disabled.args = { items, value: 'option2', defaultValue: 'Select', readonly: true };

export const WithoutOptions = Template.bind({});
WithoutOptions.args = { items: [], defaultValue: 'Select' };

export const DirectionTopLeft = Template.bind({});
DirectionTopLeft.args = { items, defaultValue: 'Select', direction: 'top left' };
DirectionTopLeft.decorators = [shiftDecorator];

export const DirectionTopRight = Template.bind({});
DirectionTopRight.args = { items, defaultValue: 'Select', direction: 'top right' };
DirectionTopRight.decorators = [shiftDecorator];

export const DirectionBottomLeft = Template.bind({});
DirectionBottomLeft.args = { items, defaultValue: 'Select', direction: 'bottom left' };
DirectionBottomLeft.decorators = [shiftDecorator];

export const DirectionBottomRight = Template.bind({});
DirectionBottomRight.args = { items, defaultValue: 'Select', direction: 'bottom right' };
DirectionBottomRight.decorators = [shiftDecorator];
