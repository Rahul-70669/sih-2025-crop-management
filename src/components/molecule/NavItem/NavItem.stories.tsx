import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Molecules/NavItem',
  component: NavItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: {
    label: 'Home',
    icon: <span>🏠</span>,
  },
};

export const Active: Story = {
  args: {
    label: 'Advisory',
    icon: <span>🌾</span>,
    isActive: true,
  },
};
