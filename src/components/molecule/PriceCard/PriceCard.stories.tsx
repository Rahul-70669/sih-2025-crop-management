import type { Meta, StoryObj } from '@storybook/react-vite';
import { PriceCard } from './PriceCard';

const meta = {
  component: PriceCard,
  title: 'Molecules/PriceCard',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PriceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UpTrend: Story = {
  args: {
    cropName: 'Wheat (Kanak)',
    cropNameHi: 'गेहूं (कनक)',
    price: 2450,
    unit: 'qt',
    trend: 'up',
    changePercent: 5.2,
    mandiName: 'Ludhiana Mandi',
    lastUpdated: new Date(),
  },
};

export const DownTrend: Story = {
  args: {
    cropName: 'Rice (Chawal)',
    cropNameHi: 'चावल',
    price: 3100,
    unit: 'qt',
    trend: 'down',
    changePercent: 2.8,
    mandiName: 'Amritsar Mandi',
    lastUpdated: new Date(),
  },
};

export const Stable: Story = {
  args: {
    cropName: 'Cotton (Kap कपास)',
    cropNameHi: 'कपास',
    price: 7200,
    unit: 'qt',
    trend: 'stable',
    changePercent: 0,
    mandiName: 'Bhatinda Mandi',
    lastUpdated: new Date(),
  },
};