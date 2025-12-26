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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 auto-rows-fr">
          <Button 
            className="h-full flex-col py-12 gap-4 rounded-[2.5rem] items-center justify-center text-center shadow-sm hover:shadow-xl transition-all border-none"
            onClick={() => navigate('/advisory')}
          >
            <div className="flex flex-col items-center justify-center w-full gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-rounded text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Crop Advisory</span>
            </div>
          </Button>
          <Button 
            className="h-full flex-col py-12 gap-4 rounded-[2.5rem] items-center justify-center text-center shadow-sm hover:shadow-xl transition-all"
            variant="secondary"
            onClick={() => navigate('/pest-detection')}
          >
            <div className="flex flex-col items-center justify-center w-full gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-rounded text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>bug_report</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Pest Detection</span>
            </div>
          </Button>
          <Button 
            className="h-full flex-col py-12 gap-4 rounded-[2.5rem] items-center justify-center text-center shadow-sm hover:shadow-xl transition-all border-base-200"
            variant="outline"
            onClick={() => navigate('/market-prices')}
          >
            <div className="flex flex-col items-center justify-center w-full gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-rounded text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-primary">Market Prices</span>
            </div>
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
                  <span className="material-symbols-rounded text-primary">eco</span>
                  <div>
                    <p className="font-medium">Wheat Advisory</p>
                    <p className="text-xs text-base-content/60">2 days ago</p>
                  </div>
                </div>
                <span className="material-symbols-rounded text-base-content/40">chevron_right</span>
              </div>
              <div 
                className="py-3 flex items-center justify-between cursor-pointer hover:bg-base-200 transition-colors rounded-lg px-2"
                onClick={() => navigate('/pest-detection')}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-rounded text-error">bug_report</span>
                  <div>
                    <p className="font-medium">Pest Detection: Wheat Rust</p>
                    <p className="text-xs text-base-content/60">5 days ago</p>
                  </div>
                </div>
                <span className="material-symbols-rounded text-base-content/40">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
