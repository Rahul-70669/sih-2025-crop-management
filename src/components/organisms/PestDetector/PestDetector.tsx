import React, { useState, useEffect, useRef } from 'react';
import { ImageUpload } from '../../molecule/ImageUpload/ImageUpload';
import { Button } from '../../atoms/Button/Button';
import { loadModel, classifyImage, Prediction } from '../../../utils/tfModel';
import type { PestDetectorProps } from './PestDetectorProps';

export const PestDetector: React.FC<PestDetectorProps> = ({
  onDetectionComplete,
  autoDetect = false,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<Prediction | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Hidden image element for TF.js analysis
  const analysisImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const initModel = async () => {
      try {
        await loadModel();
        setIsModelLoading(false);
      } catch (err) {
        console.error('Failed to load model:', err);
        setError('Failed to load AI model. Please refresh.');
        setIsModelLoading(false);
      }
    };
    initModel();
  }, []);

  const handleImageSelect = (_file: File, url: string) => {
    setPreviewUrl(url);
    setResult(null);
    setError(null);
    
    if (autoDetect) {
      // Small timeout to allow state update and image render
      setTimeout(() => handleAnalyze(), 100);
    }
  };

  const handleAnalyze = async () => {
    if (!analysisImageRef.current || !previewUrl) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const predictions = await classifyImage(analysisImageRef.current);
      if (predictions && predictions.length > 0) {
        const topPrediction = predictions[0];
        setResult(topPrediction);
        
        if (onDetectionComplete) {
          onDetectionComplete({
            disease: topPrediction.className,
            confidence: topPrediction.probability,
            imageUrl: previewUrl,
          });
        }
      } else {
        setError('No disease detected or low confidence.');
      }
    } catch (err) {
      console.error('Analysis failed:', err);
      setError('Analysis failed. Please try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setPreviewUrl(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
      {/* Hidden image for analysis - ensuring it's loaded before analysis */}
      {previewUrl && (
        <img
          ref={analysisImageRef}
          src={previewUrl}
          alt="Analysis Target"
          className="hidden"
          onLoad={() => {
              if (autoDetect && !result && !isAnalyzing) {
                  handleAnalyze();
              }
          }}
        />
      )}

      {!result ? (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body p-0">
                <ImageUpload
                    onImageSelect={handleImageSelect}
                    label={isModelLoading ? "Loading AI Model..." : "Take Photo / Upload"}
                    isLoading={isModelLoading || isAnalyzing}
                    error={error || undefined}
                    initialPreviewUrl={previewUrl || undefined}
                />
                
                {previewUrl && !autoDetect && (
                    <div className="mt-4 flex justify-center">
                         <Button
                            onClick={handleAnalyze}
                            loading={isAnalyzing}
                            disabled={isModelLoading}
                            variant="primary"
                            fullWidth
                         >
                            Analyze Image
                         </Button>
                    </div>
                )}
            </div>
        </div>
      ) : (
        <div className="card bg-base-100 shadow-lg border border-base-200">
          <figure className="px-4 pt-4">
             {previewUrl && (
                <img 
                    src={previewUrl} 
                    alt="Analyzed Crop" 
                    className="rounded-xl max-h-64 object-cover w-full" 
                />
             )}
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">
                {result.className}
            </h2>
            <div className={`badge ${result.className === 'Healthy' ? 'badge-success' : 'badge-error'} badge-lg p-3`}>
                {(result.probability * 100).toFixed(1)}% Confidence
            </div>
            
            <p className="mt-2 text-base-content/80">
                {result.className === 'Healthy' 
                    ? 'Your crop looks healthy! Keep up the good work.' 
                    : `Potential signs of ${result.className} detected.`
                }
            </p>
            
            <div className="card-actions mt-4 w-full">
              <Button onClick={handleReset} variant="outline" fullWidth>
                Analyze Another
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
