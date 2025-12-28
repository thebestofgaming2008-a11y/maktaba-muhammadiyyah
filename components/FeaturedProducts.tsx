import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "The Noble Qur'an",
    subtitle: "Standard Madinah Mushaf Edition",
    price: "$35.00",
    description: "Every home deserves a cornerstone collection. This edition is selected for its foundational importance, clarity of script, and premium binding that ensures it lasts for generations.",
    tags: ["Best Seller", "Hardcover"],
  },
  {
    id: 2,
    title: "Gardens of the Righteous",
    subtitle: "Riyad as-Salihin by Imam Nawawi",
    price: "$28.00",
    description: "A comprehensive collection of Hadith covering every aspect of Islamic belief and conduct. A timeless spiritual guide for the seeker looking to purify their heart.",
    tags: ["Spiritual", "Hadith"],
  },
  {
    id: 3,
    title: "The Sealed Nectar",
    subtitle: "Biography of the Prophet (pbuh)",
    price: "$24.00",
    description: "The complete, authoritative biography of the Prophet Muhammad. An emotional and detailed journey through history that brings the Seerah to life.",
    tags: ["Biography", "History"],
  }
];

export const FeaturedProducts: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + products.length) % products.length);
  };

  const currentProduct = products[currentIndex];

  return (
    <section id="featured" className="py-12 md:py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 md:mb-8 px-2">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-brand-accent font-medium tracking-widest uppercase text-xs md:text-sm"
              >
                Curator's Choice
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-3xl md:text-5xl text-brand-primary mt-2 leading-tight"
              >
                Featured Selections
              </motion.h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-3">
               <button 
                 onClick={() => paginate(-1)}
                 className="p-3 rounded-full border border-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white transition-all disabled:opacity-50"
                 aria-label="Previous Product"
               >
                 <ChevronLeft size={24} />
               </button>
               <button 
                 onClick={() => paginate(1)}
                 className="p-3 rounded-full border border-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white transition-all disabled:opacity-50"
                 aria-label="Next Product"
               >
                 <ChevronRight size={24} />
               </button>
            </div>
        </div>

        {/* Slider Card */}
        <div className="relative w-full h-[550px] md:h-[600px] bg-brand-primary rounded-3xl shadow-2xl overflow-hidden group">
          
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 w-full h-full"
            >
               {/* Background Image Layer */}
               <div className="absolute inset-0">
                   <img 
                       src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80&w=2000" 
                       alt="Background" 
                       className="w-full h-full object-cover transition-transform duration-[2s] scale-105"
                   />
                   {/* Gradient Overlay for Text Readability */}
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/80 to-transparent md:bg-gradient-to-r md:from-brand-primary/95 md:via-brand-primary/60 md:to-transparent" />
                   <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply" />
               </div>

               {/* Content Layer */}
               <div className="relative z-10 h-full w-full p-6 md:p-16 lg:p-20 flex flex-col justify-end md:justify-center items-start max-w-3xl">
                  
                  {/* Tags */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-2 mb-4"
                  >
                     {currentProduct.tags.map(tag => (
                       <span key={tag} className="text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                         {tag}
                       </span>
                     ))}
                  </motion.div>

                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-2 leading-tight drop-shadow-lg"
                  >
                    {currentProduct.title}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-brand-accent font-medium text-lg md:text-xl mb-6"
                  >
                    {currentProduct.subtitle}
                  </motion.p>

                  {/* Price */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                  >
                     <span className="text-3xl md:text-4xl font-bold text-white tracking-tight">{currentProduct.price}</span>
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-white/80 text-sm md:text-lg leading-relaxed mb-8 max-w-xl drop-shadow-md line-clamp-3 md:line-clamp-none"
                  >
                     {currentProduct.description}
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-row gap-3 w-full md:w-auto"
                  >
                     <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:bg-brand-accent hover:text-white transition-colors duration-300"
                     >
                        <ShoppingBag size={18} />
                        Add to Cart
                     </motion.button>
                  </motion.div>
               </div>
            </motion.div>
          </AnimatePresence>

          {/* Interactive Pagination Indicators */}
          <div className="absolute bottom-8 left-6 right-6 md:left-auto md:right-12 md:bottom-12 flex justify-center md:justify-end gap-3 z-20">
             {products.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10 ${
                    idx === currentIndex 
                        ? 'w-8 bg-brand-accent shadow-[0_0_15px_rgba(198,168,124,0.6)]' 
                        : 'w-2 bg-white/40 hover:bg-white/80 hover:w-4'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
             ))}
          </div>

          {/* Mobile Swipe Hint */}
           <div className="absolute top-1/2 right-2 -translate-y-1/2 md:hidden pointer-events-none opacity-50 animate-pulse">
              <ChevronRight className="text-white drop-shadow-md" size={24} />
           </div>

        </div>
      </div>
    </section>
  );
};