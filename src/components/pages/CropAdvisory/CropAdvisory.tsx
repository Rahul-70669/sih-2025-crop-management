import React, { useState } from 'react';
import { CropSelector } from '../../organisms/CropSelector/CropSelector';
import { SoilTypeSelector } from '../../molecule/SoilTypeSelector/SoilTypeSelector';
import { AdvisoryPanel } from '../../organisms/AdvisoryPanel/AdvisoryPanel';
import LocationSelector from '../../molecule/LocationSelector/LocationSelector';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';
import { getAdvisory, type AdvisoryResponse } from '../../../services/advisoryService';
import type { CropAdvisoryProps } from './CropAdvisoryProps';
import MainLayout from '../../templates/MainLayout/MainLayout';

// Mock Data
const MOCK_CROPS = [
  { id: '1', name: 'Wheat', description: 'Winter crop, requires cool weather.', imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=400&h=300&auto=format&fit=crop' },
  { id: '2', name: 'Rice', description: 'High water requirement, monsoon crop.', imageUrl: 'https://images.unsplash.com/photo-1536633101321-26ec0f06ca01?q=80&w=400&h=300&auto=format&fit=crop' },
  { id: '3', name: 'Corn', description: 'Versatile crop, moderate water.', imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=400&h=300&auto=format&fit=crop' },
  { id: '4', name: 'Cotton', description: 'Cash crop, requires dry weather.', imageUrl: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=400&h=300&auto=format&fit=crop' },
];

const MOCK_SOIL_TYPES = [
  { id: 'clay', name: 'Clay', description: 'Heavy soil, holds water.', imageUrl: 'https://images.unsplash.com/photo-1581067723553-34a737915b01?q=80&w=400&h=300&auto=format&fit=crop' },
  { id: 'sandy', name: 'Sandy', description: 'Drains quickly, low nutrients.', imageUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=400&h=300&auto=format&fit=crop' },
  { id: 'loamy', name: 'Loamy', description: 'Balanced soil, ideal for most crops.', imageUrl: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=400&h=300&auto=format&fit=crop' },
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
        <AdvisoryPanel 
          weather={advisory.weather} 
          recommendations={advisory.recommendations} 
        />
        <div className="flex justify-center mt-8">
            <Button onClick={() => { setStep(1); setAdvisory(null); }} variant="secondary">
                Start Over
            </Button>
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
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
    </MainLayout>
  );
};
