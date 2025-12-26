import type { Meta, StoryObj } from '@storybook/react';
import { ImageUpload } from './ImageUpload';

const meta: Meta<typeof ImageUpload> = {
  title: 'Molecules/ImageUpload',
  component: ImageUpload,
  tags: ['autodocs'],
  argTypes: {
    onImageSelect: { action: 'image selected' },
  },
};

export default meta;
type Story = StoryObj<typeof ImageUpload>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Upload Crop Photo',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'File size too large',
  },
};

export const WithPreview: Story = {
  args: {
    initialPreviewUrl: 'https://placehold.co/600x400/png?text=Preview+Image',
  },
};
