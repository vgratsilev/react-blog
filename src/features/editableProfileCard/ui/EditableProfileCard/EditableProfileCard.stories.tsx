import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybookAvatar.png';
import { IStateSchema } from '@/app/providers/StoreProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/editableProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const state: TDeepPartial<IStateSchema> = {
    profile: {
        form: {
            username: 'admin',
            firstname: 'FirstN',
            lastname: 'LastN',
            city: 'City',
            country: Country.Russia,
            age: 30,
            currency: Currency.USD,
            avatar: AvatarImg,
        },
    },
};

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(state)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.DARK)];
