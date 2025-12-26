export interface LocationSelectorProps {
  currentLocation: string;
  onLocationChange: (location: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
}
