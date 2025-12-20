import React, { ReactNode } from 'react';

// Geometric Pattern Background
export const GeometricPattern: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none opacity-[0.03] ${className}`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="islamic-geo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M20 0L40 20L20 40L0 20Z" fill="currentColor" />
        <circle cx="20" cy="20" r="2" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#islamic-geo)" />
  </svg>
);

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

// Buttons
export const ButtonPrimary: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`bg-brand-green text-white px-6 py-3 rounded-md font-medium hover:bg-brand-greenLight transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 ${className}`}
  >
    {children}
  </button>
);

export const ButtonSecondary: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`border-2 border-brand-green text-brand-green px-6 py-3 rounded-md font-medium hover:bg-brand-green hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 ${className}`}
  >
    {children}
  </button>
);

export const ButtonTertiary: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`text-brand-green underline-offset-4 hover:underline font-medium transition-colors ${className}`}
  >
    {children}
  </button>
);

// Chips
export const CategoryChip: React.FC<{ label: string }> = ({ label }) => (
  <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-brand-green hover:text-brand-green transition-colors shadow-sm whitespace-nowrap">
    {label}
  </button>
);

// Trust Bullets
export const TrustBullet: React.FC<{ icon: ReactNode, text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-sm text-gray-600">
    <span className="text-brand-green">{icon}</span>
    <span>{text}</span>
  </div>
);

interface BookPlaceholderProps {
  title: string;
  color?: string;
  height?: string;
}

// Book Placeholder
export const BookPlaceholder: React.FC<BookPlaceholderProps> = ({ title, color = "bg-brand-green", height = "h-40" }) => (
  <div className={`relative ${height} w-28 rounded-r-md rounded-l-sm shadow-md flex flex-col items-center justify-center p-2 text-center transform hover:-translate-y-1 transition-transform cursor-pointer group bg-white border-l-4 border-l-brand-gold`}>
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-10 rounded-r-md`}></div>
    <div className="w-full h-full flex flex-col items-center justify-center z-10">
      <div className="w-16 h-2 bg-gray-200 mb-2 rounded-sm opacity-50"></div>
      <span className="text-[10px] font-serif font-bold text-gray-800 leading-tight line-clamp-3 uppercase tracking-wider">{title}</span>
      <div className="mt-4 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
         <span className="text-xs text-brand-green">View</span>
      </div>
    </div>
    {/* Spine effect */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-black opacity-10 rounded-l-sm"></div>
  </div>
);