import React from 'react';
import { motion } from 'framer-motion';
import { GeometricPattern, ButtonPrimary, ButtonSecondary } from './SharedUI';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth motion
      }
    },
  };

  const categories = ["Qur’an", "Tafsir", "Hadith", "Seerah", "Arabic", "Kids"];

  return (
    <section className="relative w-full min-h-[calc(100vh-140px)] flex items-center justify-center bg-brand-stone overflow-hidden py-12 md:py-0">
      {/* Background Elements */}
      <GeometricPattern className="text-brand-green opacity-[0.03] scale-150 animate-[spin_120s_linear_infinite]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-brand-stone/20 pointer-events-none"></div>

      <motion.div 
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Main Headings */}
        <div className="mb-8 relative">
           <motion.h1 variants={itemVariants} className="flex flex-col items-center gap-2 md:gap-4">
            <span className="text-5xl md:text-7xl font-serif font-bold text-brand-text tracking-tight leading-none">
              Maktaba Muhammadiyya
            </span>
            <span 
              className="text-3xl md:text-5xl font-arabic text-brand-green mt-2 leading-relaxed" 
              dir="rtl"
            >
              مكتبة محمدية
            </span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="w-24 h-1 bg-brand-gold mx-auto mt-8 rounded-full shadow-sm"></motion.div>
        </div>

        {/* Subhead */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Curated Islamic books across Qur’an, Tafsir, Hadith, Seerah, Arabic learning, and children’s titles.
        </motion.p>

        {/* Category Chips - "Heros turned into categories" */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
             <motion.button
               key={cat}
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
               className="px-6 py-2 bg-white border border-gray-200 rounded-full text-brand-green font-medium shadow-sm hover:shadow-md hover:border-brand-green hover:bg-brand-green hover:text-white transition-all duration-300"
             >
               {cat}
             </motion.button>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-5">
          <ButtonPrimary className="min-w-[180px] text-lg shadow-lg shadow-brand-green/20 hover:shadow-brand-green/30">
            Browse Collections
          </ButtonPrimary>
          <ButtonSecondary className="min-w-[180px] text-lg hover:shadow-md bg-white/50">
            Shop Bestsellers
          </ButtonSecondary>
        </motion.div>

      </motion.div>
    </section>
  );
};
