import React, { useRef, useState } from 'react';
import { Button } from '../../atoms/Button/Button';
import type { ImageUploadProps } from './ImageUploadProps';

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelect,
  label = 'Upload Image',
  isLoading = false,
  error,
  initialPreviewUrl,
}) => {
  // Use a key-based approach to force re-render if initialPreviewUrl needs to reset,
  // or just rely on parent to handle key. For now, simple state initialization.
  const [preview, setPreview] = useState<string | null>(initialPreviewUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // If the parent passes a different initialPreviewUrl prop *after* mount and expects update,
  // the idiomatic React way without useEffect for derived state is often `key` on the parent,
  // or checking during render if we really must sync state. 
  // However, for this simple component, if the parent changes `initialPreviewUrl`, 
  // we might want to respect it. But the linter complains about setState in useEffect.
  // We can just use the prop directly if state matches, or update state on change.
  // Actually, standard pattern:
  const currentPreview = preview || initialPreviewUrl;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      onImageSelect(file, objectUrl);
    }
  };

  const handleClear = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    // We might want to notify parent of clear, but interface only has onImageSelect.
    // Assuming clearing is internal until new selection.
  };

  const triggerSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border-2 border-dashed border-base-300 rounded-xl bg-base-100 w-full max-w-md mx-auto">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
        capture="environment" // Hints mobile browsers to use the camera
      />

      {currentPreview ? (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-base-200">
          <img
            src={currentPreview}
            alt="Preview"
            className="w-full h-full object-contain"
          />
          {!isLoading && (
            <button
              onClick={handleClear}
              className="absolute top-2 right-2 btn btn-circle btn-sm btn-error"
              aria-label="Remove image"
            >
              ✕
            </button>
          )}
        </div>
      ) : (
        <div
          onClick={triggerSelect}
          className="flex flex-col items-center justify-center w-full h-48 cursor-pointer hover:bg-base-200/50 transition-colors rounded-lg"
        >
          <svg
            className="w-12 h-12 text-base-content/50 mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-sm font-medium text-base-content/70">
            Click to upload or take a photo
          </span>
        </div>
      )}

      {error && <span className="text-error text-sm">{error}</span>}

      {!currentPreview && (
        <Button
          onClick={triggerSelect}
          variant="primary"
          loading={isLoading}
          disabled={isLoading}
        >
          {label}
        </Button>
      )}
    </div>
  );
};