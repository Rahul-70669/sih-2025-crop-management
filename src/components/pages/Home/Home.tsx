import React from 'react';
import { WeatherWidget } from '../../organisms/WeatherWidget/WeatherWidget';
import { Button } from '../../atoms/Button/Button';
import MainLayout from '../../templates/MainLayout/MainLayout';
import { useNavigate } from 'react-router';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const userProfile = JSON.parse(localStorage.getItem('user_profile') || '{"name": "Farmer", "location": "Ludhiana, Punjab"}');

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 space-y-10 max-w-5xl">
        {/* Welcome Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Namaste, <span className="text-primary">{userProfile.name}</span>!
          </h1>
          <p className="text-lg text-base-content/60">Let's grow better today in {userProfile.location}.</p>
        </div>

        {/* Weather Widget Section */}
        <div className="flex justify-center w-full">
          <div className="w-full max-w-3xl">
            <WeatherWidget
              location={userProfile.location}
              temp={32}
              condition="Partly Cloudy"
              humidity={65}
              windSpeed={12}
              forecast={[
                { day: 'Mon', icon: '🌤️', high: 33, low: 22 },
                { day: 'Tue', icon: '🌧️', high: 28, low: 20 },
                { day: 'Wed', icon: '☀️', high: 34, low: 23 },
                { day: 'Thu', icon: '⛅', high: 31, low: 21 },
                { day: 'Fri', icon: '🌤️', high: 32, low: 22 },
              ]}
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Button 
            className="h-full flex-col py-10 gap-4 rounded-[2rem] items-center justify-center text-center shadow-sm hover:shadow-xl transition-all border-base-200"
            onClick={() => navigate('/advisory')}
          >
            <span className="material-symbols-rounded text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            <span className="text-lg font-bold tracking-tight">Crop Advisory</span>
          </Button>
          <Button 
            className="h-full flex-col py-10 gap-4 rounded-[2rem] items-center justify-center text-center shadow-sm hover:shadow-xl transition-all"
            variant="secondary"
            onClick={() => navigate('/pest-detection')}
          >
            <span className="material-symbols-rounded text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
            <span className="text-lg font-bold tracking-tight">Pest Detection</span>
          </Button>
          <Button 
            className="h-full flex-col py-10 gap-4 rounded-[2rem] items-center justify-center text-center shadow-sm hover:shadow-xl transition-all border-base-200"
            variant="outline"
            onClick={() => navigate('/market-prices')}
          >
            <span className="material-symbols-rounded text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
            <span className="text-lg font-bold tracking-tight">Market Prices</span>
          </Button>
        </div>

        {/* Recent Activity Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Recent Activity</h2>
          <div className="card bg-base-100 border border-base-200">
            <div className="card-body p-4 divide-y">
              <div 
                className="py-3 flex items-center justify-between cursor-pointer hover:bg-base-200 transition-colors rounded-lg px-2"
                onClick={() => navigate('/advisory')}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">eco</span>
                  <div>
                    <p className="font-medium">Wheat Advisory</p>
                    <p className="text-xs text-base-content/60">2 days ago</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-base-content/40">chevron_right</span>
              </div>
              <div 
                className="py-3 flex items-center justify-between cursor-pointer hover:bg-base-200 transition-colors rounded-lg px-2"
                onClick={() => navigate('/pest-detection')}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-error">bug_report</span>
                  <div>
                    <p className="font-medium">Pest Detection: Wheat Rust</p>
                    <p className="text-xs text-base-content/60">5 days ago</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-base-content/40">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
