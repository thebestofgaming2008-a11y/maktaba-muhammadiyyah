import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonPrimary, ButtonSecondary, CategoryChip, BookPlaceholder, GeometricPattern } from './SharedUI';
import { ArrowRight } from 'lucide-react';

// Floating particle component for subtle liveliness
const FloatingParticle = ({ delay, duration, xStart, yStart }: { delay: number; duration: number; xStart: string; yStart: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 0, x: 0 }}
    animate={{ 
      opacity: [0, 0.4, 0], 
      y: -150, 
      x: Math.random() * 40 - 20 
    }}
    transition={{ 
      duration: duration, 
      delay: delay, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
    className="absolute w-1.5 h-1.5 rounded-full bg-brand-accent/40 blur-[1px]"
    style={{ left: xStart, top: yStart }}
  />
);

export const Hero: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Qur’an');

  const categories = ["Qur’an", "Tafsir", "Hadith", "Seerah", "Arabic", "Kids"];

  // Staggered animation variants for the main hero text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const bookColors = [
      "from-[#1A3C30] to-[#0F2820]",
      "from-[#8C7654] to-[#5C4D35]", 
      "from-[#3E4E50] to-[#252F30]",
      "from-[#6B5B95] to-[#453B60]"
  ];

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-bg min-h-[85vh] flex flex-col justify-center">
      
      {/* === Structured Geometric Background Animation === */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 select-none">
        
        {/* 1. Central Ambient Glow (The Soul) */}
        <motion.div 
            className="absolute w-[60vh] h-[60vh] md:w-[80vh] md:h-[80vh] bg-gradient-radial from-brand-accent/20 via-brand-secondary/5 to-transparent blur-[80px] rounded-full mix-blend-multiply"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        />

        {/* 2. Rotating Geometric "Khatam" (8-Pointed Star Structure) */}
        {/* Square 1: Rotates Clockwise */}
        <motion.div 
           className="absolute w-[65vh] h-[65vh] md:w-[85vh] md:h-[85vh] border border-brand-primary/5 shadow-2xl shadow-brand-primary/5 bg-transparent"
           animate={{ rotate: 360 }}
           transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        />
        
        {/* Square 2: Rotates Counter-Clockwise (Creating the star overlap) */}
        <motion.div 
           className="absolute w-[65vh] h-[65vh] md:w-[85vh] md:h-[85vh] border border-brand-primary/5 shadow-2xl shadow-brand-primary/5 bg-transparent"
           animate={{ rotate: -360 }}
           transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        />

        {/* 3. Outer Orbital Ring (The Universe) */}
        <motion.div 
           className="absolute w-[85vh] h-[85vh] md:w-[110vh] md:h-[110vh] border border-brand-accent/10 rounded-full border-dashed"
           style={{ borderDasharray: "20 40" }}
           animate={{ rotate: 60 }}
           transition={{ duration: 150, ease: "linear", repeat: Infinity }}
        />
      </div>

      {/* Floating Golden Particles (Dust Motes) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <FloatingParticle delay={0} duration={12} xStart="15%" yStart="80%" />
        <FloatingParticle delay={2} duration={15} xStart="35%" yStart="90%" />
        <FloatingParticle delay={4} duration={10} xStart="75%" yStart="85%" />
        <FloatingParticle delay={6} duration={18} xStart="85%" yStart="70%" />
        <FloatingParticle delay={1} duration={14} xStart="55%" yStart="75%" />
        <FloatingParticle delay={5} duration={16} xStart="25%" yStart="60%" />
      </div>

      {/* Geometric Pattern Overlay (Static texture) */}
      <GeometricPattern className="text-brand-primary opacity-[0.03] z-0" />


      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Text Content with Staggered Entrance */}
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-brand-border shadow-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-brand-primary/70">Ramadan Collection Available</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-brand-primary tracking-tight leading-[1.1] mb-6">
            Timeless Knowledge <br /> 
            <span className="italic text-brand-primary/80 relative inline-block">
              Modern Soul.
              {/* Subtle underline decoration */}
              <motion.svg 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="absolute w-full h-3 -bottom-1 left-0 text-brand-accent/40"
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="2" />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mb-10">
            Discover a curated selection of authentic Islamic literature. 
            From beautiful Mushafs to scholarly Tafsir, designed for the modern seeker.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <ButtonPrimary>
              Start Exploring <ArrowRight size={18} />
            </ButtonPrimary>
            <ButtonSecondary>
              View Bestsellers
            </ButtonSecondary>
          </motion.div>
        </motion.div>

        {/* Dynamic Category Section */}
        <div className="mt-20">
          
          {/* Section Title */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-8"
          >
             <h3 className="font-serif text-3xl md:text-4xl text-brand-primary">Featured Products</h3>
             <div className="w-16 h-0.5 bg-brand-accent mx-auto mt-4 rounded-full opacity-60"></div>
          </motion.div>

          {/* Tabs - Scroll Reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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

          {/* Content Transition & Scroll Reveal - PRODUCT CARDS */}
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
              >
                 {/* Product Cards */}
                 {[0, 1, 2, 3].map((index) => (
                    <div key={index} className="group cursor-pointer flex flex-col items-center">
                        <div className="w-full relative transform transition-all duration-300">
                             <BookPlaceholder 
                                title={index === 0 ? `The ${activeCategory} Guide` : index === 1 ? "Path of Light" : index === 2 ? "Gardens of Peace" : "Daily Wisdom"} 
                                color={bookColors[index]} 
                             />
                        </div>
                        
                        <div className="mt-5 text-center w-full px-2">
                            <h4 className="font-serif text-lg leading-tight text-brand-primary group-hover:text-brand-accent transition-colors duration-300">
                                {index === 0 ? `The ${activeCategory} Guide` : index === 1 ? "Path of Light" : index === 2 ? "Gardens of Peace" : "Daily Wisdom"}
                            </h4>
                            <div className="flex flex-col items-center mt-2 gap-1">
                                <span className="text-[10px] uppercase tracking-widest text-brand-muted font-medium border border-brand-border px-2 py-0.5 rounded-full">
                                    {activeCategory}
                                </span>
                                <span className="font-sans font-semibold text-brand-primary mt-1">
                                    ${(24.99 + index * 5).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    </div>
                 ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="mt-14 text-center"
          >
            <a href="#" className="inline-block text-sm font-medium text-brand-primary border-b border-brand-primary/20 pb-1 hover:border-brand-primary transition-all">
              View all {activeCategory} titles &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
