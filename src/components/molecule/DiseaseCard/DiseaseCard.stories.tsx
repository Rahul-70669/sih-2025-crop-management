import type { Meta, StoryObj } from '@storybook/react';
import { DiseaseCard } from './DiseaseCard';

const meta: Meta<typeof DiseaseCard> = {
  title: 'Molecules/DiseaseCard',
  component: DiseaseCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    severity: {
      control: 'select',
      options: ['mild', 'moderate', 'severe'],
    },
    confidence: {
      control: { type: 'range', min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DiseaseCard>;

export const Default: Story = {
  args: {
    diseaseName: 'Late Blight',
    diseaseNameHi: 'लेट ब्लाइट',
    confidence: 92,
    severity: 'moderate',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Potato_late_blight_foliage.jpg/640px-Potato_late_blight_foliage.jpg',
    symptoms: [
      'Dark brown spots on leaves',
      'White fungal growth on underside',
      'Yellowing of leaf edges',
    ],
  },
};

export const Severe: Story = {
  args: {
    diseaseName: 'Rust',
    diseaseNameHi: 'रतुआ',
    confidence: 98,
    severity: 'severe',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Wheat_leaf_rust.jpg/640px-Wheat_leaf_rust.jpg',
    symptoms: [
      'Orange-brown pustules on leaves',
      'Stunted growth',
      'Reduced yield',
    ],
  },
};

export const Mild: Story = {
  args: {
    diseaseName: 'Powdery Mildew',
    diseaseNameHi: 'चूर्णिल आसिता',
    confidence: 75,
    severity: 'mild',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Powdery_mildew_on_cucumber.jpg/640px-Powdery_mildew_on_cucumber.jpg',
    symptoms: [
      'White powdery spots on leaves',
      'Leaves curling',
      'Premature leaf drop',
    ],
  },
};
