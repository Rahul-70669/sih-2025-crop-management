import React, { useState, useEffect } from 'react';
import { PriceList } from '../../organisms/PriceList/PriceList';
import { PriceCard } from '../../molecule/PriceCard/PriceCard';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';
import { getMarketPrices, type MarketPrice } from '../../../services/marketService';
import type { MarketPricesProps } from './MarketPricesProps';
import MainLayout from '../../templates/MainLayout/MainLayout';

export const MarketPrices: React.FC<MarketPricesProps> = ({ initialFilter = '' }) => {
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(initialFilter);
  const [viewMode, setViewMode] = useState<'list' | 'cards'>('cards');

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      try {
        const data = await getMarketPrices({ cropName: searchTerm });
        setPrices(data);
      } catch (error) {
        console.error('Failed to load prices', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, [searchTerm]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-primary">Market Prices</h1>
          
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Input 
              placeholder="Search crops..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-64"
            />
            <div className="join">
              <Button 
                  variant={viewMode === 'cards' ? 'primary' : 'outline'} 
                  className="join-item btn-sm"
                  onClick={() => setViewMode('cards')}
              >
                  Cards
              </Button>
              <Button 
                  variant={viewMode === 'list' ? 'primary' : 'outline'} 
                  className="join-item btn-sm"
                  onClick={() => setViewMode('list')}
              >
                  List
              </Button>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
              <span className="loading loading-dots loading-lg text-primary"></span>
          </div>
        ) : prices.length === 0 ? (
          <div className="text-center py-12 text-base-content/60">
              <p>No prices found for "{searchTerm}"</p>
          </div>
        ) : (
          <>
              {viewMode === 'cards' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {prices.map(item => (
                          <PriceCard
                              key={item.id}
                              cropName={item.cropName}
                              cropNameHi={item.cropName} // Mocking Hindi name same as English for now
                              price={item.price}
                              unit="qt"
                              trend={item.trend}
                              changePercent={Math.abs(item.changePercent)}
                              mandiName={item.mandiName}
                              lastUpdated={item.lastUpdated}
                          />
                      ))}
                  </div>
              ) : (
                  <PriceList 
                      prices={prices.map(p => ({
                          id: p.id,
                          cropName: p.cropName,
                          price: p.price,
                          trend: p.trend,
                          change: p.changePercent
                      }))} 
                  />
              )}
          </>
        )}
      </div>
    </MainLayout>
  );
};
