import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { GeometricPattern } from './SharedUI';

export const Newsletter: React.FC = () => {
  return (
    <section className="relative py-24 bg-brand-primary overflow-hidden text-white">
      <GeometricPattern className="text-white opacity-[0.05]" />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/10 mb-8 backdrop-blur-sm">
            <Mail size={24} className="text-brand-accent" />
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl mb-6">Join the Caravan</h2>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto font-light">
          Subscribe to receive updates on new arrivals, exclusive curated lists, and gems of knowledge delivered to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:bg-white/20 transition-all"
            />
            <button className="px-8 py-4 rounded-full bg-brand-accent text-brand-primary font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 group">
                Subscribe <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </form>
        
        <p className="mt-6 text-xs text-white/30">
            We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};
