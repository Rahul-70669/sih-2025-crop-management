import React, { useState } from 'react';
import type { AdvisorySectionProps } from './AdvisorySectionProps';
import { Icon } from '../../atoms/Icon/Icon';
import {Button} from '../../atoms/Button/Button';

export const AdvisorySection: React.FC<AdvisorySectionProps> = ({
  title,
  content,
  icon,
  defaultExpanded = false,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card bg-base-100 shadow-sm border border-base-200 ${className || ''}`}>
      <div className="card-body p-4">
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleExpanded}>
          <div className="flex items-center gap-3">
            {icon && (
              <div className="text-primary">
                <Icon name={icon} size="medium" />
              </div>
            )}
            <h3 className="card-title text-lg font-medium m-0">{title}</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            ariaLabel={isExpanded ? "Collapse advisory section" : "Expand advisory section"}
            aria-expanded={isExpanded}
            onClick={(e) => {
              e.stopPropagation();
              toggleExpanded();
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            }
          />
        </div>
        
        {isExpanded && (
          <div className="mt-4 text-base-content/80 animate-fade-in">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};
