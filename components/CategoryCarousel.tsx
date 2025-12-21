import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const originalCategories = [
  { id: '1', name: "Aqeedah", subtitle: "Islamic Creed & Theology", color: "bg-[#F3F4F6]" },
  { id: '2', name: "Fiqh", subtitle: "Islamic Jurisprudence", color: "bg-[#F3F4F6]" },
  { id: '3', name: "Tafsir", subtitle: "Quranic Exegesis", color: "bg-[#F3F4F6]" },
  { id: '4', name: "Hadith", subtitle: "Prophetic Traditions", color: "bg-[#F3F4F6]" },
  { id: '5', name: "Seerah", subtitle: "Prophetic Biography", color: "bg-[#F3F4F6]" },
  { id: '6', name: "History", subtitle: "Islamic Civilization", color: "bg-[#F3F4F6]" },
  { id: '7', name: "Spirituality", subtitle: "Tazkiyah & Adab", color: "bg-[#F3F4F6]" },
  { id: '8', name: "Children", subtitle: "Young Readers", color: "bg-[#F3F4F6]" },
];

export const CategoryCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollAccumulator = useRef(0);

  // Triple the list to create a buffer for infinite scrolling
  // [Set 1] [Set 2 (Start Here)] [Set 3]
  const categories = [...originalCategories, ...originalCategories, ...originalCategories];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const oneSetWidth = scrollWidth / 3;

    // Relaxed boundaries: Only reset when we are very close to the edges of the total buffer.
    // This allows manual scrolling to work smoothly without hitting resets constantly.
    
    // Near the end (Right side)
    if (scrollLeft >= scrollWidth - clientWidth - 50) {
      container.scrollLeft = scrollLeft - oneSetWidth;
    }
    // Near the start (Left side)
    else if (scrollLeft <= 50) {
      container.scrollLeft = scrollLeft + oneSetWidth;
    }
  };

  // Initialize scroll position to the middle set
  useEffect(() => {
    if (scrollRef.current) {
      const oneSetWidth = scrollRef.current.scrollWidth / 3;
      scrollRef.current.scrollLeft = oneSetWidth;
    }
  }, []);

  // Smooth Continuous Auto-scroll logic
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let lastTimestamp: number | null = null;
    const pixelsPerSecond = 30; // Gentle speed

    const animate = (timestamp: number) => {
      if (!isPaused && scrollContainer) {
        if (lastTimestamp === null) lastTimestamp = timestamp;
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        // Calculate distance to move based on time delta
        const moveAmount = (pixelsPerSecond * deltaTime) / 1000;
        scrollAccumulator.current += moveAmount;

        // Apply integer scrolling to avoid sub-pixel jitter
        if (scrollAccumulator.current >= 1) {
            const pixelShift = Math.floor(scrollAccumulator.current);
            scrollContainer.scrollLeft += pixelShift;
            scrollAccumulator.current -= pixelShift;
        }
      } else {
        lastTimestamp = null;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="categories" 
      className="py-20 bg-white border-b border-brand-border/50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 flex items-end justify-between">
        <div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-primary mb-2">Browse Genres</h2>
            <p className="text-sm text-gray-500">Swipe to explore our catalog</p>
        </div>
        <div className="hidden md:flex gap-3">
            <button 
                onClick={() => scroll('left')}
                className="p-3 rounded-full border border-gray-200 hover:bg-brand-primary hover:text-white transition-all hover:shadow-md active:scale-95"
            >
                <ArrowLeft size={20} />
            </button>
             <button 
                onClick={() => scroll('right')}
                className="p-3 rounded-full border border-gray-200 hover:bg-brand-primary hover:text-white transition-all hover:shadow-md active:scale-95"
            >
                <ArrowRight size={20} />
            </button>
        </div>
      </div>

      {/* Carousel Container - Removed snap-x to allow smooth continuous flow */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto gap-4 px-6 lg:px-8 pb-8 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {categories.map((cat, index) => (
            <motion.div 
                key={`${cat.id}-${index}`}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-[240px] md:w-[280px] group cursor-pointer"
            >
                <div className={`
                    h-[160px] rounded-xl border border-gray-100 ${cat.color} 
                    flex flex-col items-center justify-center p-6 text-center
                    relative overflow-hidden transition-all duration-300
                    group-hover:border-brand-accent/50 group-hover:shadow-lg
                `}>
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                        <h3 className="font-serif text-2xl font-bold text-brand-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                            {cat.name}
                        </h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-medium group-hover:text-brand-primary transition-colors">
                            {cat.subtitle}
                        </p>
                    </div>

                    {/* Arrow Icon that appears on hover */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-brand-accent">
                        <ArrowRight size={18} />
                    </div>
                </div>
            </motion.div>
        ))}
      </div>
    </section>
  );
};