import type { Meta, StoryObj } from '@storybook/react';
import { AdvisorySection } from './AdvisorySection';

const meta: Meta<typeof AdvisorySection> = {
  title: 'Molecules/AdvisorySection',
  component: AdvisorySection,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Icon name from the Icon component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AdvisorySection>;

export const Default: Story = {
  args: {
    title: 'Pest Alert: Fall Armyworm',
    content: 'Fall Armyworm has been spotted in your region. Inspect your maize crops for egg masses and young larvae. Early detection is key to effective control.',
    icon: 'details',
  },
};

export const Expanded: Story = {
  args: {
    title: 'Weather Advisory',
    content: 'Heavy rains expected in the next 48 hours. Ensure proper drainage in your fields to prevent waterlogging.',
    icon: 'stats',
    defaultExpanded: true,
  },
};

export const NoIcon: Story = {
  args: {
    title: 'General Tip',
    content: 'Rotate crops annually to maintain soil health and reduce pest buildup.',
  },
};

export const RichContent: Story = {
  args: {
    title: 'Fertilizer Recommendation',
    icon: 'home',
    content: (
      <div className="space-y-2">
        <p>Based on your soil test, we recommend the following application:</p>
        <ul className="list-disc list-inside pl-2">
          <li><strong>Nitrogen:</strong> 120 kg/ha</li>
          <li><strong>Phosphorus:</strong> 60 kg/ha</li>
          <li><strong>Potassium:</strong> 40 kg/ha</li>
        </ul>
        <p className="text-sm text-gray-500 mt-2">Apply 50% at planting and 50% at flowering stage.</p>
      </div>
    ),
  },
};
