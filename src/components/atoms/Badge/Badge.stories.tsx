import type {Meta, StoryFn} from '@storybook/react';
import Badge from './Badge';
import type {BadgeProps} from './BadgeProps';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'success', 'warning', 'danger'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    text: {
      control: 'text',
    },
    ariaLive: {
      control: {
        type: 'select',
        options: ['polite', 'assertive', 'off'],
      },
    },
  },
} as Meta<typeof Badge>;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'medium',
  text: 'Default Badge',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'medium',
  text: 'Success Badge',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  size: 'medium',
  text: 'Warning Badge',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'medium',
  text: 'Danger Badge',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'small',
  text: 'Small Badge',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'large',
  text: 'Large Badge',
};
