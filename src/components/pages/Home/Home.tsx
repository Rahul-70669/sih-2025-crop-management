import React from 'react';
import { WeatherWidget } from '../../organisms/WeatherWidget/WeatherWidget';
import { Button } from '../../atoms/Button/Button';
import MainLayout from '../../templates/MainLayout/MainLayout';
import { useNavigate } from 'react-router';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-3xl">
          <h1 className="text-3xl font-bold">Namaste, Farmer!</h1>
          <p className="text-base-content/70 mt-1">Let's grow better today.</p>
          <p className="text-sm font-medium mt-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">location_on</span>
            Ludhiana, Punjab
          </p>
        </div>

        {/* Weather Widget */}
        <WeatherWidget
          location="Ludhiana, Punjab"
          temp={32}
          condition="Partly Cloudy"
          humidity={65}
          windSpeed={12}
          forecast={[
            { day: 'Mon', icon: '🌤️', high: 33, low: 22 },
            { day: 'Tue', icon: '🌧️', high: 28, low: 20 },
            { day: 'Wed', icon: '☀️', high: 34, low: 23 },
          ]}
        />

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Button 
            className="h-auto flex-col py-6 gap-3 rounded-3xl"
            onClick={() => navigate('/advisory')}
          >
            <span className="material-symbols-outlined text-4xl">eco</span>
            <span>Crop Advisory</span>
          </Button>
          <Button 
            className="h-auto flex-col py-6 gap-3 rounded-3xl"
            variant="secondary"
            onClick={() => navigate('/pest-detection')}
          >
            <span className="material-symbols-outlined text-4xl">bug_report</span>
            <span>Pest Detection</span>
          </Button>
          <Button 
            className="h-auto flex-col py-6 gap-3 rounded-3xl"
            variant="ghost"
            onClick={() => navigate('/market-prices')}
          >
            <span className="material-symbols-outlined text-4xl">trending_up</span>
            <span>Market Prices</span>
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
