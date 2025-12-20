import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonPrimary, ButtonSecondary, CategoryChip, BookPlaceholder, GeometricPattern } from './SharedUI';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Qur’an');

  const categories = ["Qur’an", "Tafsir", "Hadith", "Seerah", "Arabic", "Kids"];

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-bg">
      {/* Ambient Lighting Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-secondary/5 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-brand-accent/10 blur-[100px]" />
      <GeometricPattern className="text-brand-primary opacity-[0.03]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
            <span className="text-xs font-medium uppercase tracking-widest text-brand-primary/70">Ramadan Collection Available</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-brand-primary tracking-tight leading-[1.1] mb-6"
          >
            Timeless Knowledge <br /> 
            <span className="italic text-brand-primary/80">Modern Soul.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mb-10"
          >
            Discover a curated selection of authentic Islamic literature. 
            From beautiful Mushafs to scholarly Tafsir, designed for the modern seeker.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-20"
          >
            <ButtonPrimary>
              Start Exploring <ArrowRight size={18} />
            </ButtonPrimary>
            <ButtonSecondary>
              View Bestsellers
            </ButtonSecondary>
          </motion.div>
        </div>

        {/* Dynamic Category Section */}
        <div className="mt-12">
          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <CategoryChip 
                key={cat} 
                label={cat} 
                isActive={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </motion.div>

          {/* Content Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto"
            >
               {/* Dynamically generating placeholders based on category to show "Live" feel */}
               <BookPlaceholder title={`The ${activeCategory} Guide`} color="from-[#1A3C30] to-[#0F2820]" />
               <BookPlaceholder title="Path of Light" color="from-[#8C7654] to-[#5C4D35]" />
               <BookPlaceholder title="Gardens of Peace" color="from-[#3E4E50] to-[#252F30]" />
               <BookPlaceholder title="Daily Wisdom" color="from-[#6B5B95] to-[#453B60]" />
            </motion.div>
          </AnimatePresence>
          
          <div className="mt-12 text-center">
            <a href="#" className="inline-block text-sm font-medium text-brand-primary border-b border-brand-primary/20 pb-1 hover:border-brand-primary transition-all">
              View all {activeCategory} titles &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
