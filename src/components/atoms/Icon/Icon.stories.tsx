import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: {
        type: 'select',
      },
      options: ['home', 'details', 'stats'],
      description: 'The name of the icon to display.',
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'],
      description: 'The size of the icon.',
    },
    color: {
      control: 'color',
      description: 'The color of the icon.',
    },
    ariaLabel: {
      control: 'text',
      description: 'The ARIA label for accessibility.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Home: Story = {
  args: {
    name: 'home',
    ariaLabel: 'Home Icon',
  },
};

export const Details: Story = {
  args: {
    name: 'details',
    ariaLabel: 'Details Icon',
  },
};

export const Stats: Story = {
  args: {
    name: 'stats',
    ariaLabel: 'Stats Icon',
  },
};

export const Large: Story = {
  args: {
    name: 'home',
    size: 'large',
    ariaLabel: 'Large Home Icon',
  },
};

export const Small: Story = {
  args: {
    name: 'home',
    size: 'small',
    ariaLabel: 'Small Home Icon',
  },
};

export const CustomColor: Story = {
  args: {
    name: 'stats',
    size: 'large',
    color: '#00aaff',
    ariaLabel: 'Blue Stats Icon',
  },
};
