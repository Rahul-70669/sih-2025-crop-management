import React, { useState } from 'react';
import { PestDetector } from '../../organisms/PestDetector/PestDetector';
import { saveDetectionHistory } from '../../../services/detectionService';
import type { PestDetectionProps, DetectionHistoryItem } from './PestDetectionProps';
import { Button } from '../../atoms/Button/Button';
import MainLayout from '../../templates/MainLayout/MainLayout';

// ... remedies ...

export const PestDetection: React.FC<PestDetectionProps> = ({ initialHistory = [] }) => {
  // ... state and handlers ...

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="tabs tabs-boxed mb-8 justify-center">
          <button 
            className={`tab ${activeTab === 'detect' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('detect')}
          >
            Detect
          </button>
          <button 
            className={`tab ${activeTab === 'history' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            History
          </button>
        </div>

        {activeTab === 'detect' ? renderDetectTab() : renderHistoryTab()}
      </div>
    </MainLayout>
  );
};
