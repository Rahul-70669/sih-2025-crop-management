import type { BadgeProps } from '../../atoms/Badge/BadgeProps';

export interface CropCardProps {
  /** The name of the crop */
  title: string;
  /** URL of the crop image */
  imageUrl?: string;
  /** Description of the crop */
  description?: string;
  /** Status text to display in a badge */
  status?: string;
  /** Visual variant for the status badge */
  statusVariant?: BadgeProps['variant'];
  /** Callback when the card is clicked or action button is pressed */
  onAction?: () => void;
  /** Label for the action button */
  actionLabel?: string;
}
