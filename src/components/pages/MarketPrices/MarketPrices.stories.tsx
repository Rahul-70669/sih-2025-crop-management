import type { Meta, StoryObj } from '@storybook/react';
import { MarketPrices } from './MarketPrices';

const meta: Meta<typeof MarketPrices> = {
  title: 'Pages/MarketPrices',
  component: MarketPrices,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MarketPrices>;

export const Default: Story = {
  args: {},
};

export const WithSearch: Story = {
  args: {
    initialFilter: 'Wheat',
  },
};
