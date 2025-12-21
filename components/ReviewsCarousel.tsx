import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Ahmed Al-Farsi",
    role: "Student of Knowledge",
    text: "The quality of the binding is unsurpassed. It feels like holding a piece of history. A truly spiritual reading experience.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Yasin",
    role: "Mother & Educator",
    text: "I've been looking for authentic children's books that don't compromise on quality. Maktaba Muhammadiyya is a treasure trove.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Bilal Phillips",
    role: "Islamic Studies Professor",
    text: "An essential resource for any serious library. The curation shows deep understanding of the classical tradition.",
    rating: 5,
  },
  {
    id: 4,
    name: "Fatima K.",
    role: "Book Collector",
    text: "Fast shipping and packaging was done with such Ihsan (excellence). The books arrived in pristine condition.",
    rating: 5,
  },
];

export const ReviewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 bg-brand-surface relative overflow-hidden border-t border-brand-border/30">
      
      {/* Subtle Background Icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-primary/[0.03] pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-primary mb-2">Voices of the Community</h2>
            <div className="h-0.5 w-12 bg-brand-accent/50 mx-auto rounded-full" />
        </motion.div>

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center max-w-2xl"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>
              
              <p className="font-serif text-2xl md:text-3xl text-brand-primary leading-relaxed mb-10">
                "{reviews[currentIndex].text}"
              </p>

              <div className="text-center">
                <h4 className="font-bold text-brand-primary tracking-wide text-sm">{reviews[currentIndex].name}</h4>
                <span className="text-xs text-brand-muted uppercase tracking-widest mt-1 block">{reviews[currentIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Navigation */}
        <div className="flex justify-center gap-6 mt-12 items-center">
          <button 
            onClick={prevSlide} 
            className="p-2 text-brand-primary/40 hover:text-brand-primary transition-colors hover:bg-brand-primary/5 rounded-full"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-brand-primary' : 'w-1.5 bg-brand-primary/20 hover:bg-brand-primary/40'}`}
                    aria-label={`Go to review ${idx + 1}`}
                />
            ))}
          </div>

          <button 
            onClick={nextSlide} 
            className="p-2 text-brand-primary/40 hover:text-brand-primary transition-colors hover:bg-brand-primary/5 rounded-full"
            aria-label="Next review"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};