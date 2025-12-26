import type { Meta, StoryObj } from '@storybook/react-vite';
import { CropSelector } from './CropSelector';
import type { Crop } from './CropSelectorProps';

const meta = {
  component: CropSelector,
  title: 'Organisms/CropSelector',
  tags: ['autodocs'],
} satisfies Meta<typeof CropSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockCrops: Crop[] = [
  {
    id: '1',
    name: 'Wheat',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80',
    description: 'Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food.',
  },
  {
    id: '2',
    name: 'Corn',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80',
    description: 'Maize, also known as corn, is a cereal grain first domesticated by indigenous peoples in southern Mexico.',
  },
  {
    id: '3',
    name: 'Rice',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80',
    description: 'Rice is the seed of the grass species Oryza sativa or less commonly Oryza glaberrima.',
  },
  {
    id: '4',
    name: 'Potato',
    imageUrl: 'https://images.unsplash.com/photo-1518977676651-71f6480aeef9?auto=format&fit=crop&w=400&q=80',
    description: 'The potato is a starchy tuber of the plant Solanum tuberosum and is a root vegetable.',
  },
];

export const Default: Story = {
  args: {
    crops: mockCrops,
    onSelect: (id) => console.log(`Selected crop ID: ${id}`),
  },
};

export const WithSelection: Story = {
  args: {
    crops: mockCrops,
    selectedCropId: '2',
    onSelect: (id) => console.log(`Selected crop ID: ${id}`),
  },
};

export const Loading: Story = {
  args: {
    crops: [],
    isLoading: true,
    onSelect: () => {},
  },
};

export const Empty: Story = {
  args: {
    crops: [],
    onSelect: () => {},
  },
};
