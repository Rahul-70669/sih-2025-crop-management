import type { Meta, StoryObj } from '@storybook/react';
import { PriceList } from './PriceList';

const meta: Meta<typeof PriceList> = {
  title: 'Organisms/PriceList',
  component: PriceList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PriceList>;

export const Default: Story = {
  args: {
    prices: [
      { id: '1', cropName: 'Wheat', price: 2125, trend: 'up', change: 2.5 },
      { id: '2', cropName: 'Rice (Basmati)', price: 4500, trend: 'stable', change: 0 },
      { id: '3', cropName: 'Cotton', price: 6200, trend: 'down', change: 1.2 },
    ],
  },
};
