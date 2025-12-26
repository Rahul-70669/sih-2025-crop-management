import React from 'react';
import type { FullscreenLayoutProps } from './FullscreenLayoutProps';

export const FullscreenLayout: React.FC<FullscreenLayoutProps> = ({ children, className }) => {
  return (
    <div className={`min-h-screen w-full flex flex-col ${className || ''}`}>
      {children}
    </div>
  );
};

export default FullscreenLayout;
