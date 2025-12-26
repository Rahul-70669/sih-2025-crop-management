import type { AdvisoryRecommendation } from '../../../services/advisoryService';

export interface AdvisoryPanelProps {
  weather: {
    temp: number;
    condition: string;
    humidity: number;
  };
  recommendations: AdvisoryRecommendation[];
  isLoading?: boolean;
}
