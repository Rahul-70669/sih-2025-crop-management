// Placeholder for TensorFlow.js model integration
// This will be replaced by actual model loading logic in T027/future

export interface Prediction {
  className: string;
  probability: number;
}

export const loadModel = async (): Promise<boolean> => {
  // Simulate model loading delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return true;
};

export const classifyImage = async (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _imageElement: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement
): Promise<Prediction[]> => {
  // Simulate inference delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Determine disease based on randomness for MVP visualization
  const diseases = [
    { className: 'Healthy', probability: 0.95 },
    { className: 'Wheat Rust', probability: 0.88 },
    { className: 'Leaf Blight', probability: 0.92 },
    { className: 'Powdery Mildew', probability: 0.85 },
  ];
  
  const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
  
  // Return mock prediction
  return [randomDisease];
};
