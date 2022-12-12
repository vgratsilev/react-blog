import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import BellIcon from '@/shared/assets/icons/bell.svg';
import { Button, ButtonTheme } from '../../../Button/Button';
import { Icon } from '../../../Icon/Icon';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        direction: 'bottom right',
        trigger: (
            <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={BellIcon} />
            </Button>
        ),
        children: <div>{'popover text content'}</div>,
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(Theme.DARK)];
