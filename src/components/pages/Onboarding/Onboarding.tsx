import React, { useState } from 'react';
import OnboardingLayout from '../../templates/OnboardingLayout/OnboardingLayout';
import { Button } from '../../atoms/Button/Button';
import { useNavigate } from 'react-router';

export const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/');
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Choose Language</h1>
      <p className="text-base-content/70">Select your preferred language to continue.</p>
      <div className="grid grid-cols-1 gap-4">
        <button className="btn btn-outline btn-lg h-32 rounded-3xl border-2 border-primary/20 hover:border-primary">
          <span className="text-4xl mr-2">🇬🇧</span> English
        </button>
        <button className="btn btn-outline btn-lg h-32 rounded-3xl border-2 border-primary/20 hover:border-primary">
          <span className="text-4xl mr-2">🇮🇳</span> हिन्दी
        </button>
      </div>
      <Button onClick={handleNext} fullWidth size="lg" className="rounded-2xl">Next</Button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6 text-center">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
        <span className="material-symbols-outlined text-4xl text-primary">location_on</span>
      </div>
      <h1 className="text-2xl font-bold">Enable Location</h1>
      <p className="text-base-content/70">
        We need your location to provide personalized crop recommendations and local weather updates.
      </p>
      <div className="space-y-3">
        <Button onClick={handleNext} fullWidth size="lg" className="rounded-2xl">Allow Location Access</Button>
        <Button variant="ghost" onClick={handleNext} fullWidth>Enter Location Manually</Button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Your Farm Profile</h1>
      <p className="text-base-content/70">Tell us a bit about your farm to get better advice.</p>
      <div className="space-y-4 text-left">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Land Size (Acres)</span>
          </label>
          <select className="select select-bordered w-full rounded-xl">
            <option>Less than 1 acre</option>
            <option>1-2 acres</option>
            <option>2-5 acres</option>
            <option>5+ acres</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Soil Type</span>
          </label>
          <select className="select select-bordered w-full rounded-xl">
            <option>Loamy</option>
            <option>Clay</option>
            <option>Sandy</option>
            <option>Black</option>
          </select>
        </div>
      </div>
      <Button onClick={handleNext} fullWidth size="lg" className="rounded-2xl">Get Started</Button>
    </div>
  );

  return (
    <OnboardingLayout step={step} totalSteps={3}>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
    </OnboardingLayout>
  );
};

export default Onboarding;
