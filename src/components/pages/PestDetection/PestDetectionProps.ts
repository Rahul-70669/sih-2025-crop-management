export interface DetectionHistoryItem {
  id: string;
  disease: string;
  confidence: number;
  imageUrl: string;
  date: Date;
  remedy?: string;
}

export interface PestDetectionProps {
  initialHistory?: DetectionHistoryItem[];
}
