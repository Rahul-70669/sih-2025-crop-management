export interface PriceItem {
  id: string;
  cropName: string;
  price: number;
  trend: 'up' | 'down' | 'stable';
  change: number;
}

export interface PriceListProps {
  prices: PriceItem[];
  isLoading?: boolean;
}
