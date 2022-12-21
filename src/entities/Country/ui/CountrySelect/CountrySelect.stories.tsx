import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {},
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const CountryDefault = Template.bind({});

export const CountryDark = Template.bind({});
CountryDark.decorators = [ThemeDecorator(Theme.DARK)];
