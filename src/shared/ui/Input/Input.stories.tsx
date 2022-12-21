import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Label text',
    value: '123123',
};

export const WithLabelDark = Template.bind({});
WithLabelDark.args = {
    label: 'Label text',
    value: '123123',
};
WithLabelDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
    value: '123123',
};

export const WithoutLabelDark = Template.bind({});
WithoutLabelDark.args = {
    value: '123123',
};
WithoutLabelDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ReadonlyLight = Template.bind({});
ReadonlyLight.args = {
    label: 'Label text',
    value: '123123',
    readonly: true,
};

export const ReadonlyDark = Template.bind({});
ReadonlyDark.args = {
    label: 'Label text',
    value: '123123',
    readonly: true,
};
ReadonlyDark.decorators = [ThemeDecorator(Theme.DARK)];
