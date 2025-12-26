import type { Meta, StoryObj } from '@storybook/react';
import { PestDetector } from './PestDetector';

const meta: Meta<typeof PestDetector> = {
  title: 'Organisms/PestDetector',
  component: PestDetector,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onDetectionComplete: { action: 'detection completed' },
  },
};

export default meta;
type Story = StoryObj<typeof PestDetector>;

export const Default: Story = {
  args: {},
};

export const AutoDetect: Story = {
  args: {
    autoDetect: true,
  },
};
