import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button } from '../Button/Button';
import { Dropdown, IDropdownItem } from './Dropdown';

const items: IDropdownItem[] = [
    { id: '1', content: 'item 1', disabled: false },
    { id: '2', content: 'item 2' },
    { id: '3', content: 'item 3', disabled: true },
    { id: '3', content: 'link1 3', href: 'test' },
    { id: '3', content: 'link1 3', href: 'test', disabled: true },
];

const trigger = <Button>{'test dropdown'}</Button>;

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const shiftDecorator = (Story: Story) => (
    <div style={{ display: 'inline-block' }}>
        <Story />
    </div>
);

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Light = Template.bind({});
Light.args = { items, trigger };
Light.decorators = [shiftDecorator];

export const Dark = Template.bind({});
Dark.args = { items, trigger };
Dark.decorators = [shiftDecorator, ThemeDecorator(Theme.DARK)];

export const DirectionBottomLeft = Template.bind({});
DirectionBottomLeft.args = { items, trigger, direction: 'bottom left' };
DirectionBottomLeft.decorators = [shiftDecorator];
