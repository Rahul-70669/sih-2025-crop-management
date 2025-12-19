import type { ReactNode } from 'react';

export interface WeatherCardProps {
  temp: number;
  condition: string;
  humidity: number;
  icon: ReactNode;
  className?: string;
}
