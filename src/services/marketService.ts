import axios from 'axios';

export interface MarketPrice {
  id: string;
  cropName: string;
  mandiName: string;
  price: number; // ₹ per quintal
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
  lastUpdated: Date;
}

export interface MarketPriceFilter {
  cropName?: string;
  mandiName?: string;
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const getMarketPrices = async (filter?: MarketPriceFilter): Promise<MarketPrice[]> => {
  if (!import.meta.env.VITE_API_URL) {
    console.warn('Using mock market service');
    return mockMarketPrices(filter);
  }

  try {
    const response = await axios.get<MarketPrice[]>(`${API_URL}/market/prices`, { params: filter });
    return response.data;
  } catch (error) {
    console.error('Error fetching market prices:', error);
    throw error;
  }
};

const mockMarketPrices = async (filter?: MarketPriceFilter): Promise<MarketPrice[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  let prices: MarketPrice[] = [
    {
      id: '1',
      cropName: 'Wheat',
      mandiName: 'Ludhiana New Grain Market',
      price: 2125,
      trend: 'up',
      changePercent: 1.5,
      lastUpdated: new Date()
    },
    {
      id: '2',
      cropName: 'Rice (Basmati)',
      mandiName: 'Amritsar Mandi',
      price: 4500,
      trend: 'stable',
      changePercent: 0,
      lastUpdated: new Date()
    },
    {
      id: '3',
      cropName: 'Cotton',
      mandiName: 'Bhatinda Mandi',
      price: 6200,
      trend: 'down',
      changePercent: -1.2,
      lastUpdated: new Date()
    },
    {
      id: '4',
      cropName: 'Maize',
      mandiName: 'Khanna Mandi',
      price: 1850,
      trend: 'up',
      changePercent: 0.8,
      lastUpdated: new Date()
    },
    {
      id: '5',
      cropName: 'Sugarcane',
      mandiName: 'Jalandhar Mandi',
      price: 340,
      trend: 'stable',
      changePercent: 0,
      lastUpdated: new Date()
    }
  ];

  if (filter?.cropName) {
    prices = prices.filter(p => p.cropName.toLowerCase().includes(filter.cropName!.toLowerCase()));
  }
  
  if (filter?.mandiName) {
    prices = prices.filter(p => p.mandiName.toLowerCase().includes(filter.mandiName!.toLowerCase()));
  }

  return prices;
};
