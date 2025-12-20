import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

// Modern noise overlay for texture
export const NoiseOverlay: React.FC = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-noise mix-blend-soft-light"></div>
);

// Abstract Background Pattern (Subtle)
export const GeometricPattern: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none opacity-[0.02] ${className}`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
     <pattern id="modern-geo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M50 0L100 50L50 100L0 50Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
     </pattern>
    <rect width="100%" height="100%" fill="url(#modern-geo)" />
  </svg>
);

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

// Button Primary: Sleek, pill-shaped, subtle glow with refined spring physics
export const ButtonPrimary: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <motion.button 
    whileHover={{ scale: 1.02, y: -1 }}
    whileTap={{ scale: 0.98, y: 0 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    onClick={onClick}
    className={`
      relative overflow-hidden group bg-brand-primary text-white px-8 py-4 rounded-full 
      font-sans font-medium tracking-wide shadow-[0_10px_20px_-10px_rgba(15,47,36,0.5)]
      hover:shadow-[0_20px_30px_-10px_rgba(15,47,36,0.6)] 
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:gap-3">
      {children}
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.button>
);

// Button Secondary: Minimalist outline with backdrop blur and subtle lift
export const ButtonSecondary: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <motion.button 
    whileHover={{ scale: 1.02, y: -1 }}
    whileTap={{ scale: 0.98, y: 0 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
    onClick={onClick}
    className={`
      px-8 py-4 rounded-full font-sans font-medium tracking-wide text-brand-primary
      border border-brand-primary/20 hover:border-brand-primary bg-transparent
      hover:bg-brand-primary/5 transition-colors duration-300
      ${className}
    `}
  >
    {children}
  </motion.button>
);

// Chips: Modern, pill-shaped tabs
export const CategoryChip: React.FC<{ label: string; isActive?: boolean; onClick?: () => void }> = ({ label, isActive, onClick }) => (
  <motion.button 
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
      ${isActive 
        ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' 
        : 'bg-white text-gray-500 hover:text-brand-primary shadow-sm hover:shadow-md border border-gray-100'}
    `}
  >
    {label}
  </motion.button>
);

// Trust Bullets: Clean, icon-driven
export const TrustBullet: React.FC<{ icon: ReactNode, text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-sm font-medium text-brand-primary/80 group">
    <span className="p-2 rounded-full bg-brand-accent/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors duration-300">
      {icon}
    </span>
    <span>{text}</span>
  </div>
);

interface BookPlaceholderProps {
  title: string;
  author?: string;
  color?: string;
}

// Modern Book Card: 3D Lift effect, no "cartoon" look
export const BookPlaceholder: React.FC<BookPlaceholderProps> = ({ title, author = "Classic Edition", color = "from-[#1a3c30] to-[#0d1f18]" }) => (
  <motion.div 
    className="group relative w-full aspect-[2/3] perspective-1000 cursor-pointer"
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {/* Shadow */}
    <div className="absolute bottom-0 left-4 right-4 h-4 bg-black/20 blur-xl rounded-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4"></div>

    {/* Book Cover */}
    <div className={`
      relative w-full h-full rounded-md overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-500
      bg-gradient-to-br ${color}
    `}>
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30 mix-blend-overlay"></div>
      
      {/* Sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Spine Detail (Left side) */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-black/20 z-10"></div>
      <div className="absolute left-2 top-0 bottom-0 w-[1px] bg-white/10 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between items-center text-center z-20">
        <div className="w-full pt-4">
           {/* Header Decoration */}
           <div className="w-8 h-8 border border-brand-accent/30 rounded-full mx-auto mb-4 flex items-center justify-center">
             <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
           </div>
        </div>

        <div>
          <h3 className="font-serif text-white text-xl leading-snug tracking-wide mb-2 drop-shadow-md">
            {title}
          </h3>
          <p className="text-brand-accent text-xs uppercase tracking-[0.2em] font-medium opacity-90">
            {author}
          </p>
        </div>

        <div className="w-full pb-2">
           <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent"></div>
        </div>
      </div>
    </div>
  </motion.div>
);
