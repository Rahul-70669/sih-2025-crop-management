import type { HTMLAttributes } from 'react';

export interface PriceCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * The name of the plan (e.g., "Basic", "Pro").
   */
  title: string;

  /**
   * The price string (e.g., "$10").
   */
  price: string;

  /**
   * The billing period (e.g., "/month", "per year").
   */
  period?: string;

  /**
   * A short description of the plan.
   */
  description?: string;

  /**
   * List of features included in the plan.
   */
  features?: string[];

  /**
   * Text to display on the action button.
   * @default "Choose Plan"
   */
  buttonText?: string;

  /**
   * Callback when the action button is clicked.
   */
  onButtonClick?: () => void;

  /**
   * Optional badge text (e.g., "Best Value").
   */
  badge?: string;

  /**
   * Whether this plan is recommended/highlighted.
   * @default false
   */
  isRecommended?: boolean;
}
