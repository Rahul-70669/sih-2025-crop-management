export interface Crop {
  id: string;
  name: string;
  imageUrl?: string;
  description?: string;
}

export interface CropSelectorProps {
  /** List of crops to display */
  crops: Crop[];
  /** ID of the currently selected crop */
  selectedCropId?: string;
  /** Callback when a crop is selected */
  onSelect: (cropId: string) => void;
  /** Whether the crops are loading */
  isLoading?: boolean;
}
