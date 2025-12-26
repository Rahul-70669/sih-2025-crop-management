import type { Meta, StoryObj } from '@storybook/react';
import { AdvisoryPanel } from './AdvisoryPanel';

const meta: Meta<typeof AdvisoryPanel> = {
  title: 'Organisms/AdvisoryPanel',
  component: AdvisoryPanel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AdvisoryPanel>;

export const Default: Story = {
  args: {
    weather: {
      temp: 28,
      condition: 'Sunny',
      humidity: 60,
    },
    recommendations: [
      { category: 'Irrigation', text: 'Water 20L per acre.' },
      { category: 'Fertilizer', text: 'Apply Urea for nitrogen boost.' },
    ],
  },
};

export const Loading: Story = {
  args: {
    weather: { temp: 0, condition: '', humidity: 0 },
    recommendations: [],
    isLoading: true,
  },
};
