import React, { useState } from 'react';
import OnboardingLayout from '../../templates/OnboardingLayout/OnboardingLayout';
import { Button } from '../../atoms/Button/Button';
import { useNavigate } from 'react-router';

export const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    name: '',
    language: 'English',
    location: '',
    landSize: '1-2 acres',
    soilType: 'Loamy'
  });
  const navigate = useNavigate();

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      localStorage.setItem('user_profile', JSON.stringify(profile));
      localStorage.setItem('is_logged_in', 'true');
      navigate('/');
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Namaste!</h1>
      <p className="text-base-content/70">Enter your name to personalize your experience.</p>
      <div className="form-control">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="input input-bordered w-full rounded-xl"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />
      </div>
      <Button onClick={handleNext} fullWidth size="lg" className="rounded-2xl" disabled={!profile.name}>Next</Button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Choose Language</h1>
      <p className="text-base-content/70">Select your preferred language to continue.</p>
      <div className="grid grid-cols-1 gap-4">
        <button 
          className={`btn btn-lg h-24 rounded-3xl border-2 transition-all ${profile.language === 'English' ? 'border-primary bg-primary/5' : 'border-primary/20 btn-outline'}`}
          onClick={() => setProfile({ ...profile, language: 'English' })}
        >
          <span className="text-4xl mr-2">🇬🇧</span> English
        </button>
        <button 
          className={`btn btn-lg h-24 rounded-3xl border-2 transition-all ${profile.language === 'Hindi' ? 'border-primary bg-primary/5' : 'border-primary/20 btn-outline'}`}
          onClick={() => setProfile({ ...profile, language: 'Hindi' })}
        >
          <span className="text-4xl mr-2">🇮🇳</span> हिन्दी
        </button>
      </div>
      <Button onClick={handleNext} fullWidth size="lg" className="rounded-2xl">Next</Button>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6 text-center">
      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
        <span className="material-symbols-rounded text-4xl text-primary">location_on</span>
      </div>
      <h1 className="text-2xl font-bold">Your Location</h1>
      <p className="text-base-content/70">
        We need your location for local weather and mandi prices.
      </p>
      <div className="form-control">
        <select 
          className="select select-bordered w-full rounded-xl"
          value={profile.location}
          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
        >
          <option value="" disabled>Select your state</option>
          <option value="Punjab">Punjab</option>
          <option value="Haryana">Haryana</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Gujarat">Gujarat</option>
        </select>
      </div>
      <Button onClick={handleNext} fullWidth size="lg" className="rounded-2xl" disabled={!profile.location}>Next</Button>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Your Farm Profile</h1>
      <p className="text-base-content/70">Tell us a bit about your farm to get better advice.</p>
      <div className="space-y-4 text-left">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Land Size (Acres)</span>
          </label>
          <select 
            className="select select-bordered w-full rounded-xl"
            value={profile.landSize}
            onChange={(e) => setProfile({ ...profile, landSize: e.target.value })}
          >
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
          <select 
            className="select select-bordered w-full rounded-xl"
            value={profile.soilType}
            onChange={(e) => setProfile({ ...profile, soilType: e.target.value })}
          >
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
    <OnboardingLayout step={step} totalSteps={4}>
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}
    </OnboardingLayout>
  );
};

export default Onboarding;
