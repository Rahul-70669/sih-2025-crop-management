import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';
import type { ButtonProps } from './ButtonProps';

const StoryIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 3 2-7L2 9h7z"></path>
  </svg>
);

const meta = {
  component: Button,
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'ghost', 'danger', 'success'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    iconPosition: { control: { type: 'radio' }, options: ['left', 'right'] },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: 'Danger' },
};

export const Success: Story = {
  args: { variant: 'success', children: 'Success' },
};

export const Small: Story = {
  args: { size: 'sm', children: 'Small' },
};

export const Medium: Story = {
  args: { size: 'md', children: 'Medium' },
};

export const Large: Story = {
  args: { size: 'lg', children: 'Large' },
};

export const Loading: Story = {
  args: { loading: true, children: 'Loading...' },
};

export const IconOnly: Story = {
  args: { ariaLabel: 'Close' },
  render: (args) => <Button {...(args as ButtonProps)} icon={StoryIcon} />,
};

export const WithIconLeft: Story = {
  args: { children: 'With icon', iconPosition: 'left' },
  render: (args) => <Button {...(args as ButtonProps)} icon={StoryIcon} />,
};

export const WithIconRight: Story = {
  args: { children: 'With icon', iconPosition: 'right' },
  render: (args) => <Button {...(args as ButtonProps)} icon={StoryIcon} />,
};

export const FullWidth: Story = {
  args: { fullWidth: true, children: 'Full width' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
};
