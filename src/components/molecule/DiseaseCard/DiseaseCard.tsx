import React from 'react';
import { Card } from '../../atoms/Card/Card';
import Badge from '../../atoms/Badge/Badge';
import type {DiseaseCardProps} from './DiseaseCardProps';

export const DiseaseCard: React.FC<DiseaseCardProps> = ({
  diseaseName,
  diseaseNameHi,
  confidence,
  severity,
  imageUrl,
  symptoms,
  onClick,
  className,
}) => {
  // Determine badge variant based on severity
  const severityVariant = {
    mild: 'success',
    moderate: 'warning',
    severe: 'danger',
  } as const;

  const badgeVariant = severityVariant[severity] || 'default';

  // Determine progress bar color based on confidence
  // Using DaisyUI/Tailwind classes for progress bar colors
  const progressColorClass =
    confidence > 80 ? 'progress-success' : confidence > 50 ? 'progress-warning' : 'progress-error';

  const figure = (
    <div className="h-48 overflow-hidden w-full">
      <img
        src={imageUrl}
        alt={diseaseName}
        className="w-full h-full object-cover"
      />
    </div>
  );

  const title = (
    <div className="flex justify-between items-start w-full">
      <div>
        <h3 className="text-lg font-bold">{diseaseName}</h3>
        <p className="text-sm text-gray-500">{diseaseNameHi}</p>
      </div>
      <Badge variant={badgeVariant} text={severity.charAt(0).toUpperCase() + severity.slice(1)} size="small" />
    </div>
  );

  const body = (
    <div className="w-full">
      <div className="flex items-center gap-2 my-2">
        <span className="text-sm text-gray-600">Confidence:</span>
        <progress
          className={`progress w-24 ${progressColorClass}`}
          value={confidence}
          max="100"
          aria-label={`${confidence}% confidence`}
        />
        <span className="text-sm font-semibold">{confidence}%</span>
      </div>

      <div className="mt-2">
        <p className="text-sm font-medium mb-1">Symptoms:</p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          {symptoms.slice(0, 3).map((symptom, idx) => (
            <li key={idx} className="truncate">
              {symptom}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const actions = (
    <button className="btn btn-primary btn-sm gap-2 w-full sm:w-auto">
      View Treatment
      {/* Arrow icon can be added here if Icon component supports it or as SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </button>
  );

  return (
    <Card
      figure={figure}
      title={title}
      body={body}
      actions={actions}
      hoverable
      className={`bg-base-100 shadow-lg cursor-pointer hover:shadow-xl transition-shadow ${className || ''}`}
      onClick={onClick}
      role="article"
      aria-label={`${diseaseName} detection result`}
    />
  );
};
