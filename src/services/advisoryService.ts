import axios from 'axios';

// Interfaces
export interface LocationData {
  lat: number;
  lng: number;
}

export interface AdvisoryRequest {
  cropId: string;
  soilTypeId: string;
  stage: string;
  location: LocationData;
}

export interface AdvisoryRecommendation {
  category: 'Irrigation' | 'Fertilizer' | 'Pest' | 'General';
  text: string;
}

export interface AdvisoryResponse {
  weather: {
    temp: number;
    condition: string;
    humidity: number;
  };
  recommendations: AdvisoryRecommendation[];
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Fetch crop advisory based on inputs.
 * Uses a mock response if VITE_API_URL is not set (dev mode without backend).
 */
export const getAdvisory = async (request: AdvisoryRequest): Promise<AdvisoryResponse> => {
  // Mock implementation for MVP/Development if no backend
  // In real production, we might want a feature flag, but this is simple for now.
  if (!import.meta.env.VITE_API_URL) {
    console.warn('Using mock advisory service');
    return mockAdvisoryResponse(request);
  }

  try {
    const response = await axios.post<AdvisoryResponse>(`${API_URL}/advisory`, {
        crop: request.cropId,
        soilType: request.soilTypeId,
        stage: request.stage,
        location: request.location
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching advisory:', error);
    throw error;
  }
};

const mockAdvisoryResponse = async (request: AdvisoryRequest): Promise<AdvisoryResponse> => {
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay

    // Simple deterministic mock based on input to see changes in UI
    const isWheat = request.cropId.toLowerCase().includes('wheat');
    
    return {
        weather: {
            temp: 28,
            condition: 'Sunny',
            humidity: 60
        },
        recommendations: [
            {
                category: 'Irrigation',
                text: isWheat 
                    ? 'Wheat requires moderate watering at this stage. 15L/acre.' 
                    : 'Water 20L per acre due to high temperature.'
            },
            {
                category: 'Fertilizer',
                text: 'Apply Urea for nitrogen boost.'
            },
            {
                category: 'General',
                text: `Advisory generated for crop ${request.cropId} on soil ${request.soilTypeId}.`
            }
        ]
    };
};
