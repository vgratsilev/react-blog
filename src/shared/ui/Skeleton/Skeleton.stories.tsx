import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Light = Template.bind({});
Light.args = { width: '100%', height: 200 };

export const Dark = Template.bind({});
Dark.args = { width: '100%', height: 200 };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Circle = Template.bind({});
Circle.args = { borderRadius: '50%', width: 100, height: 100 };

export const CircleDark = Template.bind({});
CircleDark.args = { borderRadius: '50%', width: 100, height: 100 };
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutAnimation = Template.bind({});
WithoutAnimation.args = { width: '100%', height: 200, noAnimation: true };
