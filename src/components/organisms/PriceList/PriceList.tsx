import React from 'react';
import type { PriceListProps } from './PriceListProps';

export const PriceList: React.FC<PriceListProps> = ({ prices, isLoading = false }) => {
  if (isLoading) {
    return <div className="text-center py-8">Loading prices...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Price (₹/qt)</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((item) => (
            <tr key={item.id} className="hover">
              <td className="font-medium">{item.cropName}</td>
              <td>₹{item.price.toLocaleString('en-IN')}</td>
              <td>
                <span className={`badge ${
                  item.trend === 'up' ? 'badge-success' : 
                  item.trend === 'down' ? 'badge-error' : 'badge-ghost'
                } gap-1`}>
                  {item.trend === 'up' && '▲'}
                  {item.trend === 'down' && '▼'}
                  {item.trend === 'stable' && '—'}
                  {Math.abs(item.change)}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
