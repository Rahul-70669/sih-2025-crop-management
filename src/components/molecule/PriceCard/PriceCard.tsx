import React from 'react';
import { Card } from '../../atoms/Card/Card';
import { Icon } from '../../atoms/Icon/Icon';
import type { PriceCardProps } from './PriceCardProps';

export const PriceCard: React.FC<PriceCardProps> = ({
  cropName,
  cropNameHi,
  price,
  unit,
  trend,
  changePercent,
  mandiName,
  lastUpdated,
  onClick,
  className
}) => {
  const trendConfig = {
    up: { icon: 'trending_up', color: 'text-success', bg: 'bg-success/10' },
    down: { icon: 'trending_down', color: 'text-error', bg: 'bg-error/10' },
    stable: { icon: 'trending_flat', color: 'text-base-content/60', bg: 'bg-base-200' }
  };

  const trendInfo = trendConfig[trend];

  const header = (
    <div className="flex justify-between items-start w-full">
      <div>
        <h3 className="text-lg font-bold">{cropName}</h3>
        <p className="text-sm text-base-content/60">{cropNameHi}</p>
      </div>
      <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${trendInfo.bg}`}>
        <Icon name={trendInfo.icon} size="small" className={trendInfo.color} />
        <span className={`text-xs font-bold ${trendInfo.color}`}>
          {trend === 'up' ? '+' : ''}{changePercent}%
        </span>
      </div>
    </div>
  );

  const body = (
    <div className="mt-4">
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-black text-primary">₹{price.toLocaleString('en-IN')}</span>
        <span className="text-sm text-base-content/60">/{unit}</span>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-base-content/70">
        <Icon name="store" size="small" />
        <span>{mandiName}</span>
      </div>
      <p className="text-[10px] text-base-content/40 mt-2 uppercase tracking-wider font-semibold">
        Last updated: {lastUpdated.toLocaleDateString()}
      </p>
    </div>
  );

  return (
    <Card
      title={header}
      body={body}
      hoverable
      bordered
      className={`w-full max-w-sm rounded-3xl overflow-hidden ${className || ''}`}
      onClick={onClick}
    />
  );
};