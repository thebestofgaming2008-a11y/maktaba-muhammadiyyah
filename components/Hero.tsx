import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonPrimary, ButtonSecondary, CategoryChip, BookPlaceholder, GeometricPattern, smoothScrollTo } from './SharedUI';
import { ArrowRight, ChevronDown } from 'lucide-react';

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

  const bookColors = [
      "from-[#1A3C30] to-[#0F2820]",
      "from-[#8C7654] to-[#5C4D35]", 
      "from-[#3E4E50] to-[#252F30]",
      "from-[#6B5B95] to-[#453B60]"
  ];

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-bg min-h-[85vh] flex flex-col justify-center">
      
      {/* Background elements */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 select-none">
        <motion.div 
            className="absolute w-[60vh] h-[60vh] md:w-[80vh] md:h-[80vh] bg-gradient-radial from-brand-accent/20 via-brand-secondary/5 to-transparent blur-[80px] rounded-full mix-blend-multiply"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div 
           className="absolute w-[65vh] h-[65vh] md:w-[85vh] md:h-[85vh] border border-brand-primary/5 shadow-2xl shadow-brand-primary/5 bg-transparent"
           animate={{ rotate: 360 }}
           transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        />
        <motion.div 
           className="absolute w-[65vh] h-[65vh] md:w-[85vh] md:h-[85vh] border border-brand-primary/5 shadow-2xl shadow-brand-primary/5 bg-transparent"
           animate={{ rotate: -360 }}
           transition={{ duration: 120, ease: "linear", repeat: Infinity }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <FloatingParticle delay={0} duration={12} xStart="15%" yStart="80%" />
        <FloatingParticle delay={2} duration={15} xStart="35%" yStart="90%" />
        <FloatingParticle delay={4} duration={10} xStart="75%" yStart="85%" />
      </div>

      <motion.div 
        className="absolute inset-[-50%] z-0 opacity-[0.03] text-brand-primary pointer-events-none"
        animate={{ 
            rotate: 360,
        }}
        transition={{ 
            duration: 150, 
            ease: "linear", 
            repeat: Infinity 
        }}
      >
        <GeometricPattern />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-brand-border shadow-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-primary/70">New Arrivals</span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-brand-primary tracking-tight leading-[1.05] mb-6">
            Timeless Knowledge <br /> 
            <span className="italic text-brand-primary/80 relative inline-block">
              Modern Soul.
              <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 1.5 }} className="absolute w-full h-3 -bottom-2 left-0 text-brand-accent/40" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="2" /></motion.svg>
            </span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mb-10">
            A curated sanctuary of authentic literature designed for the seeker's shelf.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-center gap-4 mb-24">
            <ButtonPrimary onClick={() => smoothScrollTo('featured')}>Explore Catalog <ArrowRight size={18} /></ButtonPrimary>
            <ButtonSecondary onClick={() => smoothScrollTo('bestsellers')}>Best Sellers</ButtonSecondary>
          </motion.div>
        </motion.div>

        {/* --- FEATURED PRODUCTS SECTION --- */}
        <div className="mt-20">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             className="text-center mb-12 relative flex flex-col items-center"
          >
             {/* Scroll indicator pointing to the next section */}
             <motion.div 
               animate={{ y: [0, 6, 0] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
               className="mb-6 flex flex-col items-center gap-2 text-brand-primary/80 cursor-pointer"
               onClick={() => smoothScrollTo('featured')}
             >
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold">Scroll to discover</span>
                <ChevronDown size={20} className="opacity-80" />
             </motion.div>

             <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-primary text-shimmer inline-block mb-4">
                Featured Products
             </h3>

             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent block">Hand-Picked Selection</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-16"
          >
            {categories.map((cat) => (
              <CategoryChip key={cat} label={cat} isActive={activeCategory === cat} onClick={() => setActiveCategory(cat)} />
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
            >
               {[0, 1, 2, 3].map((index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -10 }}
                    className="group cursor-pointer flex flex-col"
                  >
                      <div className="relative rounded-xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500">
                           <BookPlaceholder 
                              title={index === 0 ? `Essential ${activeCategory}` : index === 1 ? "Path of Light" : index === 2 ? "Gardens of Peace" : "Daily Wisdom"} 
                              color={bookColors[index]} 
                           />
                           <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-colors pointer-events-none" />
                      </div>
                      <div className="mt-6">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-1 block">{activeCategory}</span>
                          <h4 className="font-serif text-xl text-brand-primary group-hover:text-brand-accent transition-colors duration-300 mb-1">
                              {index === 0 ? `Essential ${activeCategory}` : index === 1 ? "Path of Light" : index === 2 ? "Gardens of Peace" : "Daily Wisdom"}
                          </h4>
                          <span className="font-sans font-bold text-brand-primary/80 tracking-tight">
                              ${(35.00 + index * 10).toFixed(2)}
                          </span>
                      </div>
                  </motion.div>
               ))}
            </motion.div>
          </AnimatePresence>
          
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-20 text-center">
            <button className="text-sm font-bold uppercase tracking-widest text-brand-primary border-b-2 border-brand-accent/30 hover:border-brand-accent pb-1 transition-all">
              Browse the complete gallery
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};