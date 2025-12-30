import React from 'react';
import { motion } from 'framer-motion';
import { ButtonPrimary, smoothScrollTo, GeometricPattern } from './SharedUI';

const GlowingSpark = () => (
  <div className="relative flex items-center justify-center w-6 h-6 mr-2">
    <div className="absolute inset-0 bg-brand-accent/20 blur-[8px] rounded-full animate-pulse" />
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className="w-4 h-4 text-brand-accent relative z-10 drop-shadow-[0_0_5px_rgba(198,168,124,0.6)]"
    >
       <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
    </svg>
  </div>
);

const TrustBadges = () => (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-8 border-t border-brand-border/40"
    >
        {[
          "Global Shipping",
          "Authentic Texts",
          "Expert Curation"
        ].map((text, idx) => (
          <div key={idx} className="flex items-center gap-2 group cursor-default">
            <GlowingSpark />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/80 group-hover:text-brand-primary transition-colors">
              {text}
            </span>
          </div>
        ))}
    </motion.div>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-24 lg:py-40 bg-brand-bg text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02]">
            <GeometricPattern />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-primary/10 bg-white/50 backdrop-blur-sm"
            >
                <span className="text-xs font-bold uppercase tracking-widest text-brand-primary/60">Established 1445 AH</span>
            </motion.div>

            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-primary leading-[1.05] mb-8 tracking-tight"
            >
                Timeless Wisdom. <br/>
                <span className="text-brand-accent italic font-normal">Modern Service.</span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-lg md:text-2xl text-brand-muted mb-12 leading-relaxed font-light max-w-2xl mx-auto"
            >
                We curate authentic Islamic literature and deliver it with excellence. 
                Reliable shipping, verified publishers, and hand-picked collections.
            </motion.p>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
                <ButtonPrimary onClick={() => smoothScrollTo('featured')}>
                    Start Shopping
                </ButtonPrimary>
                <button 
                    onClick={() => smoothScrollTo('deals')} 
                    className="px-6 py-4 text-sm font-bold uppercase tracking-widest text-brand-primary hover:text-brand-accent transition-colors"
                >
                    View Offers
                </button>
            </motion.div>

            <TrustBadges />
        </div>
    </section>
  );
};