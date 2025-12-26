import React from 'react';
import MainLayout from '../../templates/MainLayout/MainLayout';
import { Button } from '../../atoms/Button/Button';
import { useNavigate } from 'react-router';

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const userProfile = JSON.parse(localStorage.getItem('user_profile') || '{"name": "Guest", "location": "Not set", "landSize": "N/A", "soilType": "N/A"}');

  const handleLogout = () => {
    localStorage.removeItem('is_logged_in');
    localStorage.removeItem('user_profile');
    navigate('/onboarding');
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl text-primary">person</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">{userProfile.name}</h1>
            <p className="text-base-content/60">{userProfile.location}</p>
          </div>
          <Button variant="ghost" size="sm" className="rounded-xl">Edit Profile</Button>
        </div>

        <div className="space-y-6">
          <div className="card bg-base-100 border border-base-200 shadow-sm">
            <div className="card-body p-6">
              <h2 className="card-title text-lg mb-4">Farm Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-base-200 rounded-2xl">
                  <p className="text-xs text-base-content/60 uppercase">Land Size</p>
                  <p className="font-bold text-lg">{userProfile.landSize}</p>
                </div>
                <div className="p-4 bg-base-200 rounded-2xl">
                  <p className="text-xs text-base-content/60 uppercase">Soil Type</p>
                  <p className="font-bold text-lg">{userProfile.soilType}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-200 shadow-sm">
            <div className="card-body p-6">
              <h2 className="card-title text-lg mb-4">Settings</h2>
              <div className="divide-y">
                <div className="py-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined opacity-60">language</span>
                    <span>Language</span>
                  </div>
                  <span className="font-medium text-primary">{userProfile.language || 'English'}</span>
                </div>
                <div className="py-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined opacity-60">notifications</span>
                    <span>Notifications</span>
                  </div>
                  <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                </div>
                <div className="py-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined opacity-60">help</span>
                    <span>Help & Support</span>
                  </div>
                  <span className="material-symbols-outlined opacity-40">chevron_right</span>
                </div>
              </div>
            </div>
          </div>

          <Button 
            variant="ghost" 
            className="w-full text-error hover:bg-error/10 rounded-2xl mt-4"
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
