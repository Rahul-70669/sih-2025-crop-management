import type { Meta, StoryObj } from '@storybook/react-vite';
import { Home } from './Home';
import { BrowserRouter } from 'react-router';

const meta = {
  component: Home,
  title: 'Pages/Home',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Home>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
