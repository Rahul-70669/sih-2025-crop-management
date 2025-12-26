export interface DiseaseCardProps {
  /**
   * The name of the disease in English.
   */
  diseaseName: string;

  /**
   * The name of the disease in Hindi.
   */
  diseaseNameHi: string;

  /**
   * The confidence score of the detection (0-100).
   */
  confidence: number;

  /**
   * The severity level of the disease.
   */
  severity: 'mild' | 'moderate' | 'severe';

  /**
   * The URL or source of the disease image.
   */
  imageUrl: string;

  /**
   * A list of symptoms associated with the disease.
   */
  symptoms: string[];

  /**
   * Callback function when the card is clicked.
   */
  onClick?: () => void;

  /**
   * Optional custom class name for the card.
   */
  className?: string;
}
