import { Routes, Route } from 'react-router';
import './App.css';
import Home from './components/pages/Home/Home';
import Onboarding from './components/pages/Onboarding/Onboarding';
import { CropAdvisory } from './components/pages/CropAdvisory/CropAdvisory';
import { PestDetection } from './components/pages/PestDetection/PestDetection';
import { MarketPrices } from './components/pages/MarketPrices/MarketPrices';
import { Profile } from './components/pages/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/advisory" element={<CropAdvisory />} />
      <Route path="/pest-detection" element={<PestDetection />} />
      <Route path="/market-prices" element={<MarketPrices />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;