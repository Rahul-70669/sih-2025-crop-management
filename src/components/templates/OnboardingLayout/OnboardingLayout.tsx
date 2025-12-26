import React from 'react';
import type { OnboardingLayoutProps } from './OnboardingLayoutProps';

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ children, step, totalSteps }) => {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-base-100 rounded-3xl shadow-xl p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-semibold text-primary">Step {step} of {totalSteps}</span>
            <div className="flex gap-1">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 w-6 rounded-full ${i + 1 <= step ? 'bg-primary' : 'bg-base-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default OnboardingLayout;
