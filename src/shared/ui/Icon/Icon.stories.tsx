import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import { Theme } from '@/shared/const/theme';
import { Icon } from './Icon';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: { Svg: CalendarIcon },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
