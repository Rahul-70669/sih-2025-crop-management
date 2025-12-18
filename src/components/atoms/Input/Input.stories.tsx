import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import type { InputProps } from './InputProps';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'focus', 'error', 'disabled'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    label: 'Default Input',
    placeholder: 'Enter text...',
  },
};

export const Focus: Story = {
  args: {
    ...Default.args,
    variant: 'focus',
    label: 'Focused Input',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    variant: 'error',
    error: true,
    label: 'Error Input',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    variant: 'disabled',
    disabled: true,
    label: 'Disabled Input',
  },
};
