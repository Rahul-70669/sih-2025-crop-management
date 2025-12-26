import type { Meta, StoryObj } from '@storybook/react-vite';
import { MainLayout } from './MainLayout';
import { BrowserRouter } from 'react-router';

const meta = {
  component: MainLayout,
  title: 'Templates/MainLayout',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof MainLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-8 text-center bg-base-200 rounded-3xl m-8">
        Main Content Area
      </div>
    ),
  },
};
