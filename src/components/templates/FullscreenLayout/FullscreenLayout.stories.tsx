import type { Meta, StoryObj } from '@storybook/react-vite';
import { FullscreenLayout } from './FullscreenLayout';

const meta = {
  component: FullscreenLayout,
  title: 'Templates/FullscreenLayout',
} satisfies Meta<typeof FullscreenLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex-grow flex items-center justify-center bg-primary text-primary-content">
        <h1 className="text-4xl font-bold">Fullscreen Content</h1>
      </div>
    ),
  },
};
