import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import TestAvatar from '@/shared/assets/tests/storybookAvatar.png';
import { Theme } from '@/shared/const/theme';
import { UserAvatarDropdown } from './UserAvatarDropdown';

const ShiftDecorator = (Story: Story) => (
    <div style={{ right: 50, position: 'absolute' }}>
        <Story />
    </div>
);

export default {
    title: 'features/userAvatarDropdown',
    component: UserAvatarDropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        ShiftDecorator,
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'admin',
                    avatar: TestAvatar,
                },
            },
        }),
    ],
} as ComponentMeta<typeof UserAvatarDropdown>;

const Template: ComponentStory<typeof UserAvatarDropdown> = (args) => (
    <UserAvatarDropdown {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
