import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { IStateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImg from '@/shared/assets/tests/storybookAvatar.png';
import { Theme } from '@/shared/const/theme';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

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

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(state)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator(state), ThemeDecorator(Theme.DARK)];
