export interface WeatherWidgetProps {
  location: string;
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  forecast?: Array<{ day: string; high: number; low: number; icon: string }>;
  onRefresh?: () => void;
}
