import React from 'react';
import type { NavItemProps } from './NavItemProps';

export const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button 
      className={`flex flex-col items-center justify-center w-full h-full py-1 ${isActive ? 'text-primary' : 'text-base-content/60'}`}
      onClick={onClick}
    >
      <div className={`indicator ${isActive ? 'scale-110' : ''} transition-transform`}>
        {icon}
      </div>
      <span className="text-xs mt-1 font-medium">{label}</span>
    </button>
  );
};
