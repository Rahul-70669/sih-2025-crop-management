import type { Meta, StoryObj } from '@storybook/react';
import { AdvisoryItem } from './AdvisoryItem';

const meta: Meta<typeof AdvisoryItem> = {
  title: 'Molecules/AdvisoryItem',
  component: AdvisoryItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AdvisoryItem>;

export const Default: Story = {
  args: {
    category: 'Irrigation',
    text: 'Water 20L per acre due to high temperature.',
    severity: 'info',
  },
};

export const Warning: Story = {
  args: {
    category: 'Pest Alert',
    text: 'High risk of aphids detected in your area.',
    severity: 'warning',
  },
};
