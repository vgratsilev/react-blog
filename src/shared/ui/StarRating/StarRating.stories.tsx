import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StarRating } from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const NotSelectedLight = Template.bind({});
NotSelectedLight.args = {};

export const NotSelectedDark = Template.bind({});
NotSelectedDark.args = {};
NotSelectedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SelectedAllLight = Template.bind({});
SelectedAllLight.args = { selectedStars: 5 };

export const Selected3 = Template.bind({});
Selected3.args = { selectedStars: 3 };
