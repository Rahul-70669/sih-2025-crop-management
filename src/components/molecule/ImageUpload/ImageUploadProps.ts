export interface ImageUploadProps {
  /**
   * Callback when an image is selected.
   * Returns the file object and a preview URL.
   */
  onImageSelect: (file: File, previewUrl: string) => void;
  
  /**
   * Optional label for the upload button/area.
   */
  label?: string;

  /**
   * Optional loading state.
   */
  isLoading?: boolean;

  /**
   * Optional error message to display.
   */
  error?: string;

  /**
   * Initial preview URL if editing or pre-filled.
   */
  initialPreviewUrl?: string;
}
