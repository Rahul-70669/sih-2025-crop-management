import type { Meta, StoryObj } from '@storybook/react-vite';
import { CropCard } from './CropCard';

const meta = {
  component: CropCard,
  title: 'Molecules/CropCard',
  tags: ['autodocs'],
} satisfies Meta<typeof CropCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Wheat',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80',
    description: 'Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food.',
    status: 'Healthy',
    statusVariant: 'success',
  }
};

export const WithAction: Story = {
  args: {
    title: 'Corn',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80',
    description: 'Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico.',
    status: 'Needs Water',
    statusVariant: 'warning',
    onAction: () => alert('Clicked action!'),
    actionLabel: 'Manage Crop',
  }
};

export const NoImage: Story = {
  args: {
    title: 'Rice',
    description: 'Rice is the seed of the grass species Oryza sativa or less commonly Oryza glaberrima.',
    status: 'Critical',
    statusVariant: 'danger',
  }
};
