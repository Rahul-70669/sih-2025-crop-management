export interface PestDetectorProps {
  /**
   * Callback when a detection is complete
   */
  onDetectionComplete?: (result: { disease: string; confidence: number; imageUrl: string }) => void;
  
  /**
   * Whether to auto-detect immediately after upload
   * @default false
   */
  autoDetect?: boolean;
}
