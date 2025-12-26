import type { FC } from 'react';
import { CropCard } from '../../molecule/CropCard/CropCard';
import type { CropSelectorProps } from './CropSelectorProps';

export const CropSelector: FC<CropSelectorProps> = ({
  crops,
  selectedCropId,
  onSelect,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!crops || crops.length === 0) {
    return (
      <div className="text-center py-12 text-base-content/70">
        <p>No crops available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {crops.map((crop) => {
        const isSelected = selectedCropId === crop.id;
        
        return (
          <div 
            key={crop.id}
            onClick={() => onSelect(crop.id)}
            className={`cursor-pointer transition-all duration-200 ${
              isSelected ? 'ring-2 ring-primary ring-offset-2 rounded-xl transform scale-[1.02]' : 'hover:scale-[1.01]'
            }`}
          >
            <CropCard
              title={crop.name}
              imageUrl={crop.imageUrl}
              description={crop.description}
              status={isSelected ? 'Selected' : undefined}
              statusVariant="success"
              onAction={() => onSelect(crop.id)}
              actionLabel={isSelected ? 'Selected' : 'Select'}
            />
          </div>
        );
      })}
    </div>
  );
};
