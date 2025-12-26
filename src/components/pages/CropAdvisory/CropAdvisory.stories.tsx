import type { Meta, StoryObj } from '@storybook/react-vite';

import { CropAdvisory } from './CropAdvisory';

const meta = {
  component: CropAdvisory,
} satisfies Meta<typeof CropAdvisory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};