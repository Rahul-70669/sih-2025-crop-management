export interface PriceCardProps {
  /** The name of the crop in English */
  cropName: string;
  /** The name of the crop in Hindi */
  cropNameHi: string;
  /** Current market price */
  price: number;
  /** Price unit (e.g., "qt" for quintal) */
  unit: string;
  /** Price trend direction */
  trend: 'up' | 'down' | 'stable';
  /** Percentage change in price */
  changePercent: number;
  /** Name of the market (mandi) */
  mandiName: string;
  /** Last update timestamp */
  lastUpdated: Date;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional custom class name */
  className?: string;
}