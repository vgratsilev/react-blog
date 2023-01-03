import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleRating } from './ArticleRating';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            user: { authData: { id: '1' } },
        }),
    ],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Light = Template.bind({});
Light.args = { articleId: '1' };
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/articleRatings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 4 }],
        },
    ],
};

export const Dark = Template.bind({});
Dark.args = { articleId: '1' };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/articleRatings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [{ rate: 4 }],
        },
    ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = { articleId: '1' };
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/articleRatings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
