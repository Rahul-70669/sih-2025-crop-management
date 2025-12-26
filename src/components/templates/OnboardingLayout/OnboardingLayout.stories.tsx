import type { Meta, StoryObj } from '@storybook/react-vite';
import { OnboardingLayout } from './OnboardingLayout';

const meta = {
  component: OnboardingLayout,
  title: 'Templates/OnboardingLayout',
} satisfies Meta<typeof OnboardingLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StepOne: Story = {
  args: {
    step: 1,
    totalSteps: 3,
    children: (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Welcome</h2>
        <p className="mt-4">This is the first step of onboarding.</p>
      </div>
    ),
  },
};

export const StepTwo: Story = {
  args: {
    step: 2,
    totalSteps: 3,
    children: (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Preferences</h2>
        <p className="mt-4">Set your preferences here.</p>
      </div>
    ),
  },
};
