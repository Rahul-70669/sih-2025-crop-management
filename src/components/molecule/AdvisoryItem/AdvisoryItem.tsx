import React from 'react';
import type { AdvisoryItemProps } from './AdvisoryItemProps';

export const AdvisoryItem: React.FC<AdvisoryItemProps> = ({ 
  category, 
  text, 
  severity = 'info' 
}) => {
  const severityStyles = {
    info: 'alert-info',
    warning: 'alert-warning',
    error: 'alert-error',
    success: 'alert-success',
  };

  return (
    <div className={`alert ${severityStyles[severity]} shadow-md flex-col items-start gap-1`}>
      <span className="font-bold text-xs uppercase tracking-wider opacity-70">
        {category}
      </span>
      <span className="text-lg">{text}</span>
    </div>
  );
};
