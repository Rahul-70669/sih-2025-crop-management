import type { Meta, StoryObj } from '@storybook/react-vite';
import { Onboarding } from './Onboarding';
import { BrowserRouter } from 'react-router';

const meta = {
  component: Onboarding,
  title: 'Pages/Onboarding',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Onboarding>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
