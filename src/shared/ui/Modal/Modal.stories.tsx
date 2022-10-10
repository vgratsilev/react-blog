import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { OutlineDark } from 'shared/ui/Button/Button.stories';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const textStub = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eum ex nulla
officiis, sapiente tempore! Ab adipisci aliquam asperiores aspernatur cum cumque deserunt dicta
dolores ea eaque earum eos facere fugiat fugit ipsum labore magni maiores minus modi non nostrum
obcaecati odio odit omnis placeat porro quaerat, quasi qui quidem quisquam quod quos repudiandae
sequi, similique, soluta ullam velit? Adipisci aperiam consectetur consequatur dolorem dolores
eligendi eos explicabo minima minus nam natus neque nihil, perspiciatis, quibusdam sint veniam,
veritatis. Alias, aut cum dicta dolores dolorum esse fugiat illo iusto nemo nihil nobis omnis
perferendis quidem, suscipit tempore temporibus voluptates voluptatibus.`;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: textStub,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    isOpen: true,
    children: textStub,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
