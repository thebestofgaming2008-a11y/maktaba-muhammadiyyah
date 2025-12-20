import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBullet, NoiseOverlay } from './components/SharedUI';
import { CheckCircle2, ShieldCheck, Globe2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg relative overflow-hidden">
      <NoiseOverlay />
      
      <Header />
      
      <main className="flex-grow relative z-10">
        <Hero />
        
        {/* Minimal Trust Strip */}
        <div className="border-t border-brand-border/60 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 text-center md:text-left">
            <h3 className="font-serif text-2xl text-brand-primary">Why choose us?</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <TrustBullet icon={<CheckCircle2 size={18} />} text="Authentic Sources" />
              <TrustBullet icon={<ShieldCheck size={18} />} text="Curated Quality" />
              <TrustBullet icon={<Globe2 size={18} />} text="Global Shipping" />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-brand-primary text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
             <span className="font-serif text-2xl font-bold tracking-tight">Maktaba.</span>
             <p className="text-white/40 text-sm mt-2">© 2024 Maktaba Muhammadiyya.</p>
          </div>
          <div className="flex gap-8 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
