import React from 'react';
import { Card } from '../../atoms/Card/Card';
import {Button} from '../../atoms/Button/Button';
import Badge from '../../atoms/Badge/Badge';
import type { PriceCardProps } from './PriceCardProps';

export const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  buttonText = 'Choose Plan',
  onButtonClick,
  badge,
  isRecommended = false,
  className,
  ...rest
}) => {
  const cardAppearance = isRecommended ? 'hover' : 'default';
  const cardBordered = !isRecommended; // Highlighted cards might use shadow instead of border, or both.
  // Adjusting logic: if recommended, maybe we want a specific border or shadow.
  // For now, let's say recommended cards are hoverable and have a shadow by default (via 'hover' appearance).

  const header = (
    <div className="flex justify-between items-start w-full">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
      </div>
      {badge && (
        <Badge text={badge} variant={isRecommended ? 'success' : 'default'} size="small" />
      )}
    </div>
  );

  const bodyContent = (
    <div className="mt-4">
      <div className="flex items-baseline">
        <span className="text-3xl font-extrabold">{price}</span>
        {period && <span className="ml-1 text-gray-500">{period}</span>}
      </div>

      {features && features.length > 0 && (
        <ul className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {/* Simple checkmark icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2 text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const actionsContent = (
    <Button
      variant={isRecommended ? 'primary' : 'secondary'}
      fullWidth
      onClick={onButtonClick}
    >
      {buttonText}
    </Button>
  );

  return (
    <Card
      title={header}
      body={bodyContent}
      actions={actionsContent}
      appearance={cardAppearance}
      bordered={cardBordered}
      className={`w-full max-w-sm ${className ?? ''}`}
      {...rest}
    />
  );
};
