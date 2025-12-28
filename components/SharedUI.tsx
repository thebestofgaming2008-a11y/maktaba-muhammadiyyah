import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const NoiseOverlay: React.FC = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-noise mix-blend-soft-light"></div>
);

export const GeometricPattern: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={`absolute inset-0 w-full h-full pointer-events-none opacity-[0.02] ${className}`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
     <pattern id="modern-geo" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M50 0L100 50L50 100L0 50Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
     </pattern>
    <rect width="100%" height="100%" fill="url(#modern-geo)" />
  </svg>
);

// Utility for smooth scrolling with offset and delay
export const smoothScrollTo = (id: string, offset: number = 80) => {
  const element = document.getElementById(id);
  if (element) {
    // Small delay to allow for any immediate state updates or exit animations
    setTimeout(() => {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }, 50);
  }
};

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ButtonPrimary: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <motion.button 
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      relative overflow-hidden bg-brand-primary text-white px-10 py-4 rounded-full 
      font-sans font-bold text-sm tracking-widest uppercase shadow-xl
      hover:shadow-2xl transition-shadow
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center justify-center gap-2">
      {children}
    </span>
    <div className="absolute inset-0 bg-brand-secondary opacity-0 hover:opacity-100 transition-opacity" />
  </motion.button>
);

export const ButtonSecondary: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => (
  <motion.button 
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      px-10 py-4 rounded-full font-sans font-bold text-sm tracking-widest uppercase text-brand-primary
      border-2 border-brand-primary/10 hover:border-brand-primary bg-white/50 backdrop-blur-sm
      transition-all duration-300
      ${className}
    `}
  >
    {children}
  </motion.button>
);

export const CategoryChip: React.FC<{ label: string; isActive?: boolean; onClick?: () => void }> = ({ label, isActive, onClick }) => (
  <motion.button 
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`
      px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300
      ${isActive 
        ? 'bg-brand-primary text-white shadow-lg border-2 border-brand-primary' 
        : 'bg-white text-gray-400 hover:text-brand-primary hover:border-brand-primary/40 border-2 border-gray-100 shadow-sm'}
    `}
  >
    {label}
  </motion.button>
);

interface BookPlaceholderProps {
  title: string;
  author?: string;
  color?: string;
}

export const BookPlaceholder: React.FC<BookPlaceholderProps> = ({ title }) => (
  <div className="relative w-full aspect-[2/3] group overflow-hidden rounded-lg shadow-md bg-brand-bg/50">
    {/* Real Image Placeholder */}
    <img 
      src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80&w=800" 
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    />
    
    {/* Dark Overlay on Hover */}
    <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    {/* Quick View Button */}
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
       <button className="bg-white text-brand-primary px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl hover:bg-brand-accent transition-colors">
         Quick View
       </button>
    </div>
  </div>
);