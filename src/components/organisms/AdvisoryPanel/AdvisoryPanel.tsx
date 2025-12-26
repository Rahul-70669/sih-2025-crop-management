import React from 'react';
import { AdvisoryItem } from '../../molecule/AdvisoryItem/AdvisoryItem';
import { WeatherCard } from '../../molecule/WeatherCard/WeatherCard';
import type { AdvisoryPanelProps } from './AdvisoryPanelProps';

export const AdvisoryPanel: React.FC<AdvisoryPanelProps> = ({
  weather,
  recommendations,
  isLoading = false
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-primary">Your Crop Advisory</h2>
      
      <div className="flex justify-center">
        <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            humidity={weather.humidity}
            icon={<span className="text-4xl">🌤️</span>}
            className="w-full max-w-sm"
        />
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <AdvisoryItem
            key={index}
            category={rec.category}
            text={rec.text}
            severity="info" // Default to info, logic can be enhanced
          />
        ))}
      </div>
    </div>
  );
};
