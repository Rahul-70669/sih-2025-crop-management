import type { Meta, StoryObj } from '@storybook/react-vite';

import { ImageUpload } from './ImageUpload';

const meta = {
  component: ImageUpload,
} satisfies Meta<typeof ImageUpload>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};