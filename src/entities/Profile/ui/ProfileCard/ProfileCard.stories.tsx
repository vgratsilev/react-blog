import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybookAvatar.png';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

const profileCardArgs = {
    username: 'admin',
    firstname: 'FirstN',
    lastname: 'LastN',
    city: 'City',
    country: Country.Russia,
    age: 30,
    currency: Currency.USD,
    avatar: AvatarImg,
};

export const Primary = Template.bind({});
Primary.args = { data: profileCardArgs };

export const Dark = Template.bind({});
Dark.args = { data: profileCardArgs };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = { error: 'error' };

export const Loading = Template.bind({});
Loading.args = { isLoading: true };
