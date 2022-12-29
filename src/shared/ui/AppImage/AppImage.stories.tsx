import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import TestAvatar from '@/shared/assets/tests/storybookAvatar.png';
import UserIcon from '@/shared/assets/icons/user-avatar-filled.svg';
import { Icon } from '../Icon';
import { AppImage } from './AppImage';
import { Skeleton } from '../Skeleton';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Light = Template.bind({});
Light.args = { src: TestAvatar, width: '200px', height: '200px' };

export const Dark = Template.bind({});
Dark.args = { src: TestAvatar, width: '200px', height: '200px' };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorFallback = Template.bind({});
ErrorFallback.args = {
    src: '',
    fallback: (
        <Skeleton
            width={200}
            height={200}
            borderRadius={'50%'}
        />
    ),
    errorFallback: (
        <Icon
            Svg={UserIcon}
            width={200}
            height={200}
            inverted={false}
        />
    ),
};
