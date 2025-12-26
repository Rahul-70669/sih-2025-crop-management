import type { Meta, StoryObj } from '@storybook/react';
import LocationSelector from './LocationSelector';

const meta: Meta<typeof LocationSelector> = {
  title: 'Molecules/LocationSelector',
  component: LocationSelector,
  tags: ['autodocs'],
  argTypes: {
    currentLocation: { control: 'text' },
    onLocationChange: { action: 'locationChanged' },
  },
};

export default meta;
type Story = StoryObj<typeof LocationSelector>;

const sampleOptions = [
  { label: 'New York', value: 'ny' },
  { label: 'London', value: 'ldn' },
  { label: 'Tokyo', value: 'tky' },
  { label: 'Paris', value: 'prs' },
  { label: 'Berlin', value: 'brl' },
];

export const Default: Story = {
  args: {
    currentLocation: '',
    options: sampleOptions,
    placeholder: 'Select a city',
  },
};

export const Selected: Story = {
  args: {
    currentLocation: 'ldn',
    options: sampleOptions,
  },
};
