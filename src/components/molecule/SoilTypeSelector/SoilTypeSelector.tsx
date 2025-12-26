import type { FC } from 'react';
import type { SoilTypeSelectorProps } from './SoilTypeSelectorProps';

export const SoilTypeSelector: FC<SoilTypeSelectorProps> = ({
  soilTypes,
  selectedSoilTypeId,
  onSelect,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <span className="loading loading-spinner loading-md text-primary"></span>
      </div>
    );
  }

  if (!soilTypes || soilTypes.length === 0) {
    return (
      <div className="text-center py-8 text-base-content/70">
        <p>No soil types available.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {soilTypes.map((soil) => {
        const isSelected = selectedSoilTypeId === soil.id;
        
        return (
          <div 
            key={soil.id}
            onClick={() => onSelect(soil.id)}
            className={`cursor-pointer p-4 rounded-lg border transition-all duration-200 flex flex-col gap-2 ${
              isSelected 
                ? 'border-primary bg-primary/5 ring-1 ring-primary' 
                : 'border-base-300 hover:border-primary/50 hover:bg-base-200'
            }`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onSelect(soil.id);
                }
            }}
            aria-pressed={isSelected}
          >
            {soil.imageUrl && (
              <img 
                src={soil.imageUrl} 
                alt={soil.name} 
                className="w-full h-32 object-cover rounded-md mb-2" 
              />
            )}
            <div className="flex justify-between items-center">
                <h3 className={`font-semibold ${isSelected ? 'text-primary' : 'text-base-content'}`}>
                    {soil.name}
                </h3>
                {isSelected && (
                    <div className="badge badge-primary badge-sm">Selected</div>
                )}
            </div>
            <p className="text-sm text-base-content/70 line-clamp-2">
              {soil.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
