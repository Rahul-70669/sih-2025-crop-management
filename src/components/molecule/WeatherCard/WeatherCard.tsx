import type { FC } from 'react';
import { Card } from '../../atoms/Card/Card';
import type { WeatherCardProps } from './types';

export const WeatherCard: FC<WeatherCardProps> = (props) => {
  const { temp, condition, humidity, icon, className } = props;

  return (
    <Card
      className={className}
      title="Current Weather"
      body={
        <div className="flex flex-col items-center">
          <div className="text-5xl">{icon}</div>
          <div className="text-3xl font-bold">{temp}°C</div>
          <div className="text-lg">{condition}</div>
          <div className="text-sm">Humidity: {humidity}%</div>
        </div>
      }
    />
  );
};
