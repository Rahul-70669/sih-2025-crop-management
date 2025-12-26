export interface SoilType {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
}

export interface SoilTypeSelectorProps {
  /**
   * List of available soil types
   */
  soilTypes: SoilType[];
  /**
   * Currently selected soil type ID
   */
  selectedSoilTypeId?: string;
  /**
   * Callback when a soil type is selected
   */
  onSelect: (soilTypeId: string) => void;
  /**
   * Loading state
   */
  isLoading?: boolean;
}
