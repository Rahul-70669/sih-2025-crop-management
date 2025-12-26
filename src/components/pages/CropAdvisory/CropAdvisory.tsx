import React, { useState } from 'react';
import { CropSelector } from '../../organisms/CropSelector/CropSelector';
import { SoilTypeSelector } from '../../molecule/SoilTypeSelector/SoilTypeSelector';
import LocationSelector from '../../molecule/LocationSelector/LocationSelector';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { getAdvisory, AdvisoryResponse } from '../../../services/advisoryService';
import type { CropAdvisoryProps } from './CropAdvisoryProps';

// Mock Data
const MOCK_CROPS = [
  { id: '1', name: 'Wheat', description: 'Winter crop, requires cool weather.', imageUrl: 'https://placehold.co/400x300?text=Wheat' },
  { id: '2', name: 'Rice', description: 'High water requirement, monsoon crop.', imageUrl: 'https://placehold.co/400x300?text=Rice' },
  { id: '3', name: 'Corn', description: 'Versatile crop, moderate water.', imageUrl: 'https://placehold.co/400x300?text=Corn' },
  { id: '4', name: 'Cotton', description: 'Cash crop, requires dry weather.', imageUrl: 'https://placehold.co/400x300?text=Cotton' },
];

const MOCK_SOIL_TYPES = [
  { id: 'clay', name: 'Clay', description: 'Heavy soil, holds water.', imageUrl: 'https://placehold.co/400x300?text=Clay' },
  { id: 'sandy', name: 'Sandy', description: 'Drains quickly, low nutrients.', imageUrl: 'https://placehold.co/400x300?text=Sandy' },
  { id: 'loamy', name: 'Loamy', description: 'Balanced soil, ideal for most crops.', imageUrl: 'https://placehold.co/400x300?text=Loam' },
];

const LOCATION_OPTIONS = [
  { label: 'Punjab', value: 'punjab' },
  { label: 'Haryana', value: 'haryana' },
  { label: 'Uttar Pradesh', value: 'up' },
  { label: 'Madhya Pradesh', value: 'mp' },
  { label: 'Maharashtra', value: 'mh' },
];

export const CropAdvisory: React.FC<CropAdvisoryProps> = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    cropId: '',
    soilTypeId: '',
    location: '',
    stage: 'Sowing', // Default
  });
  
  const [loading, setLoading] = useState(false);
  const [advisory, setAdvisory] = useState<AdvisoryResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAdvisory({
        cropId: formData.cropId,
        soilTypeId: formData.soilTypeId,
        stage: formData.stage,
        location: { lat: 20.5937, lng: 78.9629 }, // Mock Lat/Lng for selected location
      });
      setAdvisory(response);
      handleNext();
    } catch (err) {
      console.error(err);
      setError('Failed to fetch advisory. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Select Your Crop</h2>
      <CropSelector
        crops={MOCK_CROPS}
        selectedCropId={formData.cropId}
        onSelect={(id) => setFormData({ ...formData, cropId: id })}
      />
      <div className="flex justify-end mt-4">
        <Button onClick={handleNext} disabled={!formData.cropId} variant="primary">
          Next
        </Button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Select Soil Type</h2>
      <SoilTypeSelector
        soilTypes={MOCK_SOIL_TYPES}
        selectedSoilTypeId={formData.soilTypeId}
        onSelect={(id) => setFormData({ ...formData, soilTypeId: id })}
      />
      <div className="flex justify-between mt-4">
        <Button onClick={handleBack} variant="secondary">Back</Button>
        <Button onClick={handleNext} disabled={!formData.soilTypeId} variant="primary">
          Next
        </Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center">Additional Details</h2>
      
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <LocationSelector
          currentLocation={formData.location}
          onLocationChange={(loc) => setFormData({ ...formData, location: loc })}
          options={LOCATION_OPTIONS}
          placeholder="Select State/Region"
        />
      </div>

      <Input
        label="Crop Stage (e.g., Sowing, Flowering)"
        value={formData.stage}
        onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
        placeholder="Enter crop stage"
      />

      <div className="flex justify-between mt-8">
        <Button onClick={handleBack} variant="secondary">Back</Button>
        <Button 
            onClick={handleSubmit} 
            loading={loading}
            disabled={!formData.location || !formData.stage} 
            variant="primary"
        >
          Get Advisory
        </Button>
      </div>
      {error && <div className="text-error text-center mt-2">{error}</div>}
    </div>
  );

  const renderStep4 = () => {
    if (!advisory) return <div>No data</div>;

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-primary">Your Crop Advisory</h2>
        
        <div className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body">
                <h3 className="card-title text-secondary">Current Weather</h3>
                <div className="stats shadow bg-base-200">
                    <div className="stat place-items-center">
                        <div className="stat-title">Temperature</div>
                        <div className="stat-value text-primary">{advisory.weather.temp}°C</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Condition</div>
                        <div className="stat-value text-secondary text-lg">{advisory.weather.condition}</div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title">Humidity</div>
                        <div className="stat-value text-accent">{advisory.weather.humidity}%</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="space-y-4">
            {advisory.recommendations.map((rec, index) => (
                <div key={index} className="alert alert-info shadow-md flex-col items-start gap-1">
                    <span className="font-bold text-xs uppercase tracking-wider opacity-70">{rec.category}</span>
                    <span className="text-lg">{rec.text}</span>
                </div>
            ))}
        </div>

        <div className="flex justify-center mt-8">
            <Button onClick={() => { setStep(1); setAdvisory(null); }} variant="secondary">
                Start Over
            </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ul className="steps w-full mb-8">
        <li className={`step ${step >= 1 ? 'step-primary' : ''}`}>Crop</li>
        <li className={`step ${step >= 2 ? 'step-primary' : ''}`}>Soil</li>
        <li className={`step ${step >= 3 ? 'step-primary' : ''}`}>Details</li>
        <li className={`step ${step >= 4 ? 'step-primary' : ''}`}>Advisory</li>
      </ul>

      <div className="min-h-[400px]">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
        {step === 4 && renderStep4()}
      </div>
    </div>
  );
};
