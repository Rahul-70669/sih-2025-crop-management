import type { Meta, StoryObj } from '@storybook/react';
import { PestDetection } from './PestDetection';

const meta: Meta<typeof PestDetection> = {
  title: 'Pages/PestDetection',
  component: PestDetection,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof PestDetection>;

export const Default: Story = {
  args: {
    initialHistory: [],
  },
};

export const WithHistory: Story = {
  args: {
    initialHistory: [
      {
        id: '1',
        disease: 'Wheat Rust',
        confidence: 0.88,
        imageUrl: 'https://placehold.co/100x100/png?text=Rust',
        date: new Date('2023-10-15'),
        remedy: 'Apply fungicides.',
      },
      {
        id: '2',
        disease: 'Healthy',
        confidence: 0.95,
        imageUrl: 'https://placehold.co/100x100/png?text=Healthy',
        date: new Date('2023-10-10'),
        remedy: 'No action needed.',
      },
    ],
  },
};
