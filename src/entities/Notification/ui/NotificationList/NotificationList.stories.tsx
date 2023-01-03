import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationList } from './NotificationList';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification 1',
                    description: 'This is mock notification',
                },
                {
                    id: '2',
                    title: 'Test alarm',
                    description: 'I want sleep',
                },
                {
                    id: '3',
                    title: 'Very important message',
                    description: 'I love frontend',
                },
            ],
        },
    ],
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Notification 1',
                    description: 'This is mock notification',
                },
                {
                    id: '2',
                    title: 'Test alarm',
                    description: 'I want sleep',
                },
                {
                    id: '3',
                    title: 'Very important message',
                    description: 'I love frontend',
                },
            ],
        },
    ],
};
Dark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
