import type { Meta, StoryObj } from '@storybook/react';
import { WeatherWidget } from './WeatherWidget';

const meta: Meta<typeof WeatherWidget> = {
  title: 'Organisms/WeatherWidget',
  component: WeatherWidget,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WeatherWidget>;

export const Default: Story = {
  args: {
    location: 'Ludhiana, Punjab',
    temp: 32,
    condition: 'Sunny',
    humidity: 45,
    windSpeed: 12,
    forecast: [
      { day: 'Mon', high: 34, low: 24, icon: '☀️' },
      { day: 'Tue', high: 33, low: 23, icon: '⛅' },
      { day: 'Wed', high: 31, low: 22, icon: '🌧️' },
    ],
  },
};
