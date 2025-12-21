import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { CategoryCarousel } from './components/CategoryCarousel';
import { DealsSection } from './components/DealsSection';
import { BestSellers } from './components/BestSellers';
import { ReviewsCarousel } from './components/ReviewsCarousel';
import { NoiseOverlay } from './components/SharedUI';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg relative">
      <NoiseOverlay />
      
      <TopBar />
      <Header />
      
      <main className="flex-grow relative z-10 overflow-x-hidden">
        <Hero />
        <FeaturedProducts />
        <CategoryCarousel />
        <DealsSection />
        <BestSellers />
        <ReviewsCarousel />
      </main>

      <footer id="footer" className="bg-[#0b241c] text-white py-16 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                
                {/* Brand Column */}
                <div className="col-span-1 md:col-span-1">
                    <span className="font-serif text-2xl font-bold tracking-tight text-brand-accent">Maktaba.</span>
                    <p className="text-white/50 text-sm mt-4 leading-relaxed">
                        Authentic Islamic books for the modern seeker. Curated with care, delivered with excellence.
                    </p>
                </div>

                {/* Policies Column */}
                <div>
                    <h4 className="font-serif text-lg text-white mb-6">Policies</h4>
                    <ul className="space-y-3 text-sm text-white/60">
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Shipping Policy</a></li>
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Cancellation Policy</a></li>
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h4 className="font-serif text-lg text-white mb-6">Contact</h4>
                    <ul className="space-y-3 text-sm text-white/60">
                        <li className="flex items-center gap-3">
                            <span className="text-white/30 text-xs uppercase tracking-widest w-16">Mail</span>
                            <a href="mailto:support@maktaba.com" className="hover:text-brand-accent transition-colors">support@maktaba.com</a>
                        </li>
                        <li className="flex items-center gap-3">
                             <span className="text-white/30 text-xs uppercase tracking-widest w-16">Whatsapp</span>
                            <a href="#" className="hover:text-brand-accent transition-colors">+1 (555) 123-4567</a>
                        </li>
                    </ul>
                </div>
                
                {/* Social/Extra Column (Optional, keeping aligned with 4 cols) */}
                <div>
                     <h4 className="font-serif text-lg text-white mb-6">Social</h4>
                     <div className="flex gap-4 text-sm text-white/60">
                        <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
                        <a href="#" className="hover:text-brand-accent transition-colors">Twitter</a>
                     </div>
                </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
                <p>© 2024 Maktaba Muhammadiyya. All rights reserved.</p>
                <div className="flex gap-4">
                  <span>Visa</span>
                  <span>Mastercard</span>
                  <span>PayPal</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}