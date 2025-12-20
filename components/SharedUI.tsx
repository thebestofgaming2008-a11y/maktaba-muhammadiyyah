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
    className={`bg-brand-green text-white px-8 py-3.5 rounded-full font-medium tracking-wide hover:bg-brand-greenLight hover:-translate-y-0.5 transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 ${className}`}
  >
    {children}
  </button>
);

export const ButtonSecondary: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <button 
    onClick={onClick}
    className={`border border-brand-green text-brand-green px-8 py-3.5 rounded-full font-medium tracking-wide hover:bg-brand-green hover:text-white hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 ${className}`}
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
  <button className="px-5 py-2.5 bg-white border border-gray-100 rounded-full text-sm font-semibold text-gray-700 hover:border-brand-green hover:text-brand-green hover:shadow-md transition-all duration-200 whitespace-nowrap">
    {label}
  </button>
);

// Trust Bullets
export const TrustBullet: React.FC<{ icon: ReactNode, text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-sm md:text-base font-medium text-gray-700 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 hover:border-brand-green/20 transition-colors">
    <span className="text-brand-green">{icon}</span>
    <span>{text}</span>
  </div>
);

interface BookPlaceholderProps {
  title: string;
  color?: string;
  height?: string;
}

// Book Placeholder - Enhanced for "Live" feel
export const BookPlaceholder: React.FC<BookPlaceholderProps> = ({ title, color = "bg-brand-green", height = "h-64" }) => (
  <div className={`relative ${height} w-full rounded-r-lg rounded-l-sm shadow-xl flex flex-col items-center justify-center p-4 text-center transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group bg-white border-l-[6px] border-l-brand-gold overflow-hidden`}>
    
    {/* Texture/Cover Color */}
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-90 rounded-r-lg`}></div>
    <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
    
    {/* Content */}
    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center border-[1px] border-white/20 p-2 m-1">
       {/* Decorative Arch */}
       <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-16 border-t-2 border-r-2 border-l-2 border-white/30 rounded-t-full"></div>
       
       <div className="mt-8 text-center">
        <h3 className="text-white font-serif font-bold text-lg md:text-xl leading-tight drop-shadow-md mb-1">{title}</h3>
        <div className="w-8 h-0.5 bg-brand-gold mx-auto my-2 opacity-80"></div>
        <span className="text-white/80 text-xs font-sans tracking-widest uppercase">Classic Edition</span>
       </div>
    </div>

    {/* Hover Overlay */}
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 backdrop-blur-[2px]">
      <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-bold transform scale-90 group-hover:scale-100 transition-transform shadow-lg">
        Quick View
      </button>
    </div>

    {/* Spine Shadow effect */}
    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"></div>
  </div>
);
