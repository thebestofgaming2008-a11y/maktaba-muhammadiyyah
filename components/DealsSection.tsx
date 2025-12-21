import React from 'react';
import { motion } from 'framer-motion';
import { ButtonSecondary } from './SharedUI';
import { Tag, Clock } from 'lucide-react';

export const DealsSection: React.FC = () => {
  return (
    <section id="deals" className="py-20 bg-brand-primary text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-brand-secondary/30 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-brand-accent text-brand-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        <Tag size={14} />
                        <span>Limited Time Offer</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4">Ramadan Prep Bundle</h2>
                    <p className="text-white/80 text-lg mb-6 max-w-xl">
                        Get the essential "Spiritual Preparation" collection including 3 bestselling titles and a guided journal.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className="text-3xl font-bold text-brand-accent">
                            $45.00 <span className="text-lg text-white/40 line-through font-normal ml-2">$65.00</span>
                        </div>
                        <ButtonSecondary className="bg-white text-brand-primary border-none hover:bg-brand-accent transition-colors w-full sm:w-auto">
                            Claim Deal
                        </ButtonSecondary>
                    </div>
                </div>

                {/* Visual Timer or Graphic */}
                <div className="flex-shrink-0">
                    <div className="flex items-center gap-2 text-white/60 mb-2 justify-center md:justify-start">
                        <Clock size={16} />
                        <span className="text-xs uppercase tracking-widest">Offer ends in</span>
                    </div>
                    <div className="flex gap-4 text-center">
                        <div className="bg-black/30 rounded-lg p-4 w-20 border border-white/5 backdrop-blur-md">
                            <span className="block text-3xl font-bold font-mono text-white">02</span>
                            <span className="text-[10px] uppercase text-white/50">Days</span>
                        </div>
                        <div className="bg-black/30 rounded-lg p-4 w-20 border border-white/5 backdrop-blur-md">
                            <span className="block text-3xl font-bold font-mono text-white">14</span>
                            <span className="text-[10px] uppercase text-white/50">Hours</span>
                        </div>
                         <div className="bg-black/30 rounded-lg p-4 w-20 border border-white/5 backdrop-blur-md">
                            <span className="block text-3xl font-bold font-mono text-white">35</span>
                            <span className="text-[10px] uppercase text-white/50">Mins</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};