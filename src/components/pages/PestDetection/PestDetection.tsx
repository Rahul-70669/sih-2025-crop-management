import React, { useState } from 'react';
import { PestDetector } from '../../organisms/PestDetector/PestDetector';
import { saveDetectionHistory } from '../../../services/detectionService';
import type { PestDetectionProps, DetectionHistoryItem } from './PestDetectionProps';
import { Button } from '../../atoms/Button/Button';
import MainLayout from '../../templates/MainLayout/MainLayout';

// Mock remedies database for MVP
const REMEDIES: Record<string, string> = {
  'Wheat Rust': 'Apply fungicides like Propiconazole. Ensure proper spacing between plants to reduce humidity.',
  'Leaf Blight': 'Remove infected leaves. Use disease-free seeds. Apply Mancozeb if severe.',
  'Powdery Mildew': 'Spray sulfur-based fungicides. Improve air circulation.',
  'Healthy': 'No action needed. Keep monitoring.',
};

export const PestDetection: React.FC<PestDetectionProps> = ({ initialHistory = [] }) => {
  const [history, setHistory] = useState<DetectionHistoryItem[]>(initialHistory);
  const [activeTab, setActiveTab] = useState<'detect' | 'history'>('detect');
  const [currentRemedy, setCurrentRemedy] = useState<string | null>(null);

  const handleDetectionComplete = async (result: { disease: string; confidence: number; imageUrl: string }) => {
    // 1. Determine remedy
    const remedy = REMEDIES[result.disease] || 'Consult local agriculture officer.';
    setCurrentRemedy(remedy);

    // 2. Create history item
    const newItem: DetectionHistoryItem = {
      id: Date.now().toString(),
      disease: result.disease,
      confidence: result.confidence,
      imageUrl: result.imageUrl,
      date: new Date(),
      remedy
    };

    // 3. Update local state
    setHistory(prev => [newItem, ...prev]);

    // 4. Sync to backend (mocked)
    try {
        // Convert imageUrl blob to File object (simplified for MVP: mock file)
        const mockFile = new File([""], "detected.jpg", { type: "image/jpeg" });
        await saveDetectionHistory({
            disease: result.disease,
            confidence: result.confidence,
            severity: 'Medium', // Default for MVP
            imageUrl: result.imageUrl
        }, mockFile);
    } catch (err) {
        console.error("Failed to sync history", err);
    }
  };

  const renderDetectTab = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">AI Disease Detection</h2>
        <p className="text-base-content/70">
          Upload a clear photo of the affected leaf. Our AI will analyze it instantly.
        </p>
      </div>

      <PestDetector 
        onDetectionComplete={handleDetectionComplete} 
        autoDetect={true}
      />

      {currentRemedy && (
        <div className="alert alert-success shadow-lg mt-6">
          <div>
            <h3 className="font-bold text-lg">Recommended Action</h3>
            <p className="mt-1">{currentRemedy}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderHistoryTab = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Detection History</h2>
      {history.length === 0 ? (
        <div className="text-center py-10 text-base-content/60">
          <p>No past detections found.</p>
          <Button 
            variant="ghost" 
            onClick={() => setActiveTab('detect')}
            className="mt-2"
          >
            Start a new detection
          </Button>
        </div>
      ) : (
        history.map((item) => (
          <div key={item.id} className="card card-side bg-base-100 shadow-md border border-base-200">
            <figure className="w-1/3 max-w-[120px]">
              <img src={item.imageUrl} alt={item.disease} className="h-full object-cover" />
            </figure>
            <div className="card-body p-4">
              <h3 className="card-title text-base">{item.disease}</h3>
              <div className="text-sm opacity-70">
                {item.date.toLocaleDateString()}
              </div>
              <div className="badge badge-outline">
                {(item.confidence * 100).toFixed(0)}% Match
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );

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