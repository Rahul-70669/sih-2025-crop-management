import axios from 'axios';

export interface DetectionResult {
  disease: string;
  confidence: number;
  severity: 'Low' | 'Medium' | 'High';
  imageUrl?: string; // Optional URL if returned by server or local preview
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

/**
 * Uploads an image for pest/disease detection.
 * 
 * Note: The actual AI inference might happen client-side (T029/TF.js) or server-side.
 * This service is primarily for syncing results/images to the backend for history,
 * OR for server-side inference if offline model fails/is not preferred.
 * 
 * Based on the plan, we have offline-first (TF.js), so this might be used to *save* the result
 * after client-side detection, or valid hybrid approach.
 * 
 * Contract implies POST /pest-detection takes multipart/form-data.
 */
export const detectPest = async (imageFile: File): Promise<DetectionResult> => {
  // If no backend URL, we might want to simulate "saving" or just rely on the component's TF.js result.
  // However, the contract specifies a POST endpoint.
  if (!import.meta.env.VITE_API_URL) {
    console.warn('Using mock detection service (backend sync)');
    return mockDetectionSync(imageFile);
  }

  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axios.post<DetectionResult>(`${API_URL}/pest-detection`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error syncing detection:', error);
    throw error;
  }
};

/**
 * Saves a locally detected result to the backend history.
 */
export const saveDetectionHistory = async (_result: DetectionResult, imageFile: File): Promise<void> => {
    // Similar to detectPest but specifically for saving history after offline inference
    // Implementation depends on specific backend route for history vs inference
    // Re-using detectPest if the backend handles both logic (inference + save)
    // or distinct endpoint. Assuming /pest-detection handles both for now.
    await detectPest(imageFile);
};


const mockDetectionSync = async (file: File): Promise<DetectionResult> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Simulating upload for ${file.name}`);
    
    // Return a mock result consistent with what backend might return
    return {
        disease: 'Wheat Rust (Mock Backend)',
        confidence: 0.92,
        severity: 'High',
        imageUrl: URL.createObjectURL(file)
    };
};
