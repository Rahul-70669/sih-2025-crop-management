import type { Meta, StoryObj } from '@storybook/react-vite';
import { Profile } from './Profile';
import { BrowserRouter } from 'react-router';

const meta = {
  component: Profile,
  title: 'Pages/Profile',
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Profile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
