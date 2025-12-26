import type { Meta, StoryObj } from '@storybook/react';
import { SoilTypeSelector } from './SoilTypeSelector';
import type { SoilType } from './SoilTypeSelectorProps';

const mockSoilTypes: SoilType[] = [
  {
    id: '1',
    name: 'Clay Soil',
    description: 'Heavy soil that holds water well but drains slowly. Rich in nutrients.',
    imageUrl: 'https://placehold.co/400x300/8B4513/FFFFFF?text=Clay+Soil',
  },
  {
    id: '2',
    name: 'Sandy Soil',
    description: 'Light, warm, dry and tends to be acidic and low in nutrients.',
    imageUrl: 'https://placehold.co/400x300/F4A460/FFFFFF?text=Sandy+Soil',
  },
  {
    id: '3',
    name: 'Loamy Soil',
    description: 'Mixture of sand, silt and clay that are combined to avoid the negative effects of each type.',
    imageUrl: 'https://placehold.co/400x300/DEB887/FFFFFF?text=Loamy+Soil',
  },
  {
    id: '4',
    name: 'Silt Soil',
    description: 'Slippery when wet, not grainy or rocky. Holds moisture well.',
    imageUrl: 'https://placehold.co/400x300/A0522D/FFFFFF?text=Silt+Soil',
  },
];

const meta: Meta<typeof SoilTypeSelector> = {
  title: 'Molecules/SoilTypeSelector',
  component: SoilTypeSelector,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
  },
};

export default meta;
type Story = StoryObj<typeof SoilTypeSelector>;

export const Default: Story = {
  args: {
    soilTypes: mockSoilTypes,
  },
};

export const Selected: Story = {
  args: {
    soilTypes: mockSoilTypes,
    selectedSoilTypeId: '2',
  },
};

export const Loading: Story = {
  args: {
    soilTypes: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    soilTypes: [],
  },
};
