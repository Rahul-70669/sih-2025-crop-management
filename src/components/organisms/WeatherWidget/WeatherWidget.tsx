import React from 'react';
import { Card } from '../../atoms/Card/Card';
import type { WeatherWidgetProps } from './WeatherWidgetProps';

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  location,
  temp,
  condition,
  humidity,
  windSpeed,
  forecast = [],
  onRefresh
}) => {
  return (
    <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg border-none">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            📍 {location}
          </h2>
          <div className="mt-4">
            <span className="text-6xl font-bold">{temp}°</span>
            <span className="text-2xl ml-1">{condition}</span>
          </div>
        </div>
        <div className="text-right">
           {onRefresh && (
             <button onClick={onRefresh} className="btn btn-ghost btn-circle btn-sm text-white">
               ↻
             </button>
           )}
           <div className="mt-8 text-sm opacity-90">
             <div className="flex items-center justify-end gap-1">
               <span>💧</span> {humidity}% Humidity
             </div>
             <div className="flex items-center justify-end gap-1 mt-1">
               <span>💨</span> {windSpeed} km/h Wind
             </div>
           </div>
        </div>
      </div>

      {forecast.length > 0 && (
        <div className="mt-6 pt-4 border-t border-white/20 flex justify-between gap-2 overflow-x-auto">
          {forecast.map((day, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[60px]">
              <span className="text-sm font-medium">{day.day}</span>
              <span className="text-xl my-1">{day.icon}</span>
              <span className="text-sm">{day.high}° / {day.low}°</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};
