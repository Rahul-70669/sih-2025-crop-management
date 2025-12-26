import type { Meta, StoryObj } from '@storybook/react-vite';
import { PriceCard } from './PriceCard';

const meta = {
  component: PriceCard,
  title: 'Molecules/PriceCard',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PriceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Basic Plan',
    price: '$19',
    period: '/month',
    description: 'Essential features for individuals.',
    features: ['1 User', '5 Projects', 'Community Support'],
    buttonText: 'Start Free Trial',
  },
};

export const Recommended: Story = {
  args: {
    title: 'Pro Plan',
    price: '$49',
    period: '/month',
    description: 'Perfect for growing teams.',
    features: [
      'Up to 5 Users',
      'Unlimited Projects',
      'Priority Support',
      'Analytics Dashboard',
    ],
    buttonText: 'Get Started',
    isRecommended: true,
    badge: 'Most Popular',
  },
};

export const Enterprise: Story = {
  args: {
    title: 'Enterprise',
    price: '$99',
    period: '/month',
    description: 'Advanced features for large organizations.',
    features: [
      'Unlimited Users',
      'Unlimited Projects',
      '24/7 Dedicated Support',
      'Custom Integrations',
      'SSO & Advanced Security',
    ],
    buttonText: 'Contact Sales',
    badge: 'Best Value',
  },
};
