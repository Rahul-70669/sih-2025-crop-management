import type { ReactNode } from 'react';

export interface OnboardingLayoutProps {
  children: ReactNode;
  step: number;
  totalSteps: number;
}
