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

export const BookPlaceholder: React.FC<BookPlaceholderProps> = ({ title, author = "Premium Edition", color = "from-[#1a3c30] to-[#0d1f18]" }) => (
  <div className="relative w-full aspect-[2/3] perspective-1000">
    <div className={`
      relative w-full h-full rounded-sm overflow-hidden
      bg-gradient-to-br ${color}
    `}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
      <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/30 z-10"></div>
      <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-white/5 z-10"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-between items-center text-center z-20">
        <div className="w-full pt-4">
           <div className="w-10 h-10 border border-brand-accent/40 rounded-full mx-auto mb-4 flex items-center justify-center">
             <div className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></div>
           </div>
        </div>
        <div>
          <h3 className="font-serif text-white text-2xl leading-tight tracking-wide mb-3 px-2">
            {title}
          </h3>
          <p className="text-brand-accent text-[10px] uppercase tracking-[0.3em] font-bold opacity-80">
            {author}
          </p>
        </div>
        <div className="w-full pb-2">
           <div className="w-16 h-[2px] bg-brand-accent/40 mx-auto"></div>
        </div>
      </div>
    </div>
  </div>
);