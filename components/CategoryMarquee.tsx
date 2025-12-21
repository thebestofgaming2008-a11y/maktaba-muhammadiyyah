import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  { name: "Tafsir", arabic: "تفسير" },
  { name: "Hadith", arabic: "حديث" },
  { name: "Fiqh", arabic: "فقه" },
  { name: "Seerah", arabic: "سيرة" },
  { name: "Aqeedah", arabic: "عقيدة" },
  { name: "History", arabic: "تاريخ" },
  { name: "Spirituality", arabic: "تزكية" },
  { name: "Poetry", arabic: "شعر" },
  { name: "Children", arabic: "أطفال" },
  { name: "Language", arabic: "لغة" },
];

interface MarqueeItemProps {
  item: typeof categories[0];
}

const MarqueeItem: React.FC<MarqueeItemProps> = ({ item }) => (
  <div className="flex-shrink-0 mx-6 group cursor-pointer">
    <div className="flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border border-brand-border bg-white hover:border-brand-accent transition-colors duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full origin-center"></div>
        <span className="font-serif text-lg text-brand-primary relative z-10">{item.name}</span>
        <span className="font-arabic text-xl text-brand-accent mt-1 relative z-10 opacity-60 group-hover:opacity-100 transition-opacity">{item.arabic}</span>
    </div>
  </div>
);

export const CategoryMarquee: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bg overflow-hidden border-y border-brand-border/50">
      <div className="max-w-7xl mx-auto px-6 mb-10">
         <motion.h3 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center font-sans uppercase tracking-[0.2em] text-sm text-brand-muted"
         >
           Browse by Genre
         </motion.h3>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="relative flex overflow-x-hidden group"
      >
        <motion.div 
            className="flex py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 60 // Slowed down from 30
            }}
        >
          {/* Double the list for infinite seamless loop */}
          {[...categories, ...categories].map((cat, idx) => (
            <MarqueeItem key={`${cat.name}-${idx}`} item={cat} />
          ))}
        </motion.div>
        
        {/* Gradients to fade edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-brand-bg to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-brand-bg to-transparent z-10"></div>
      </motion.div>
    </section>
  );
};