import type { Meta, StoryObj } from '@storybook/react';
import { WeatherCard } from './WeatherCard';
import { Icon } from '../../atoms/Icon/Icon.tsx';

const meta: Meta<typeof WeatherCard> = {
  title: 'Molecules/WeatherCard',
  component: WeatherCard,
  tags: ['autodocs'],
  argTypes: {
    temp: {
      control: 'number',
      description: 'The current temperature in Celsius.',
    },
    condition: {
      control: 'text',
      description: 'The current weather condition.',
    },
    humidity: {
      control: 'number',
      description: 'The current humidity percentage.',
    },
    icon: {
      control: 'object',
      description: 'The icon to display for the weather condition.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    temp: 25,
    condition: 'Sunny',
    humidity: 60,
    icon: <Icon name="stats" size="large" />,
  },
};

export const Cloudy: Story = {
  args: {
    temp: 18,
    condition: 'Cloudy',
    humidity: 80,
    icon: <Icon name="details" size="large" />,
  },
};

export const Rainy: Story = {
  args: {
    temp: 15,
    condition: 'Rainy',
    humidity: 90,
    icon: <Icon name="home" size="large" />,
  },
};
