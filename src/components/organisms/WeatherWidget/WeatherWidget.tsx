import React from 'react';
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
    <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white shadow-2xl rounded-[2rem] p-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <span className="material-symbols-rounded text-sm">location_on</span>
            <span className="text-sm font-bold tracking-wide uppercase">{location}</span>
          </div>
          {onRefresh && (
            <button onClick={onRefresh} className="hover:rotate-180 transition-transform duration-500 p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20">
              <span className="material-symbols-rounded text-lg">refresh</span>
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          <div className="text-center">
            <div className="text-8xl font-black tracking-tighter drop-shadow-lg">{temp}°</div>
            <div className="text-2xl font-medium opacity-90 mt-2">{condition}</div>
          </div>

          <div className="grid grid-cols-2 gap-6 bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10">
            <div className="text-center">
              <span className="material-symbols-rounded text-blue-200 block mb-1">humidity_percentage</span>
              <div className="text-xl font-bold">{humidity}%</div>
              <div className="text-[10px] uppercase opacity-60 font-bold tracking-widest">Humidity</div>
            </div>
            <div className="text-center">
              <span className="material-symbols-rounded text-blue-200 block mb-1">air</span>
              <div className="text-xl font-bold">{windSpeed}</div>
              <div className="text-[10px] uppercase opacity-60 font-bold tracking-widest">km/h Wind</div>
            </div>
          </div>
        </div>

        {forecast.length > 0 && (
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-5 gap-2">
            {forecast.map((day, idx) => (
              <div key={idx} className="flex flex-col items-center p-3 rounded-2xl hover:bg-white/5 transition-colors">
                <span className="text-xs font-bold opacity-60 uppercase mb-2">{day.day}</span>
                <span className="text-3xl mb-2">{day.icon}</span>
                <div className="text-sm font-bold">{day.high}°</div>
                <div className="text-xs opacity-50">{day.low}°</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
