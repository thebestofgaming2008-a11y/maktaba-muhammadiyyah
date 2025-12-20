import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-brand-surface overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-primary mb-4">Voices of the Community</h2>
        <div className="w-16 h-1 bg-brand-accent mx-auto rounded-full opacity-50"></div>
      </div>

      <div className="relative h-[400px] flex items-center justify-center perspective-1000">
        <div className="relative w-full max-w-4xl h-full flex justify-center items-center">
          <AnimatePresence mode="popLayout">
            {reviews.map((review, index) => {
              // Calculate relative position to handle infinite loop logic visually
              let position = index - currentIndex;
              if (position < -1) position += reviews.length;
              if (position > 1) position -= reviews.length;
              
              // Only render standard 3 (-1, 0, 1) for the carousel effect
              const isActive = index === currentIndex;
              const isPrev = (index === (currentIndex - 1 + reviews.length) % reviews.length);
              const isNext = (index === (currentIndex + 1) % reviews.length);

              if (!isActive && !isPrev && !isNext) return null;

              let x = 0;
              let scale = 1;
              let opacity = 1;
              let zIndex = 10;
              let rotateY = 0;

              if (isActive) {
                x = 0;
                scale = 1;
                opacity = 1;
                zIndex = 10;
                rotateY = 0;
              } else if (isPrev) {
                x = -350; // shift left
                scale = 0.8;
                opacity = 0.5;
                zIndex = 5;
                rotateY = 15;
              } else if (isNext) {
                x = 350; // shift right
                scale = 0.8;
                opacity = 0.5;
                zIndex = 5;
                rotateY = -15;
              }

              return (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    x: x, 
                    scale: scale, 
                    opacity: opacity,
                    zIndex: zIndex,
                    rotateY: rotateY
                  }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                  className={`absolute w-[90%] md:w-[600px] bg-white p-8 md:p-12 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-brand-border flex flex-col items-center text-center cursor-pointer ${isActive ? 'pointer-events-auto' : 'pointer-events-none md:pointer-events-auto'}`}
                  onClick={() => {
                     if(isPrev) prevSlide();
                     if(isNext) nextSlide();
                  }}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-brand-accent text-brand-accent" />
                    ))}
                  </div>
                  
                  <p className="font-serif text-xl md:text-2xl text-brand-primary leading-relaxed mb-8">
                    "{review.text}"
                  </p>

                  <div className="mt-auto">
                    <h4 className="font-bold text-brand-primary tracking-wide">{review.name}</h4>
                    <span className="text-sm text-brand-muted uppercase tracking-wider">{review.role}</span>
                  </div>
                  
                  {/* Decorative Quote Mark */}
                  <div className="absolute top-6 left-8 text-8xl font-serif text-brand-accent opacity-10 leading-none">“</div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button onClick={prevSlide} className="p-3 rounded-full border border-brand-border hover:bg-brand-primary hover:text-white transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="p-3 rounded-full border border-brand-border hover:bg-brand-primary hover:text-white transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};