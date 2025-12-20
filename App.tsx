import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BookPlaceholder, TrustBullet } from './components/SharedUI';
import { CheckCircle, ShieldCheck, Truck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trust Indicators / Quick Features (Transition section) */}
        <div className="bg-white border-y border-gray-100 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center md:justify-around gap-6 md:gap-12">
            <TrustBullet icon={<CheckCircle size={20} />} text="Authentic Sources & Curated Editions" />
            <TrustBullet icon={<ShieldCheck size={20} />} text="Secure Checkout & Privacy" />
            <TrustBullet icon={<Truck size={20} />} text="Fast International Shipping" />
          </div>
        </div>

        {/* Placeholder for "Active/Live" feeling - Featured Section */}
        <section className="py-24 bg-white relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between mb-12">
                 <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Weekly Bestsellers</h2>
                    <p className="text-gray-500">Discover what our community is reading right now.</p>
                 </div>
                 <a href="#" className="hidden md:block text-brand-green font-medium hover:text-brand-gold transition-colors">View all bestsellers &rarr;</a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                 <div className="w-full aspect-[2/3]">
                    <BookPlaceholder title="The Sealed Nectar" height="h-full" color="bg-emerald-900" />
                 </div>
                 <div className="w-full aspect-[2/3]">
                    <BookPlaceholder title="Fortress of the Muslim" height="h-full" color="bg-brand-gold" />
                 </div>
                 <div className="w-full aspect-[2/3] hidden md:block">
                    <BookPlaceholder title="Riyad as-Salihin" height="h-full" color="bg-blue-900" />
                 </div>
                 <div className="w-full aspect-[2/3] hidden lg:block">
                    <BookPlaceholder title="Stories of the Prophets" height="h-full" color="bg-teal-800" />
                 </div>
                 <div className="w-full aspect-[2/3] hidden lg:block">
                    <BookPlaceholder title="Don't Be Sad" height="h-full" color="bg-red-900" />
                 </div>
              </div>
              
              <div className="mt-8 text-center md:hidden">
                 <a href="#" className="text-brand-green font-medium hover:text-brand-gold transition-colors">View all bestsellers &rarr;</a>
              </div>
           </div>
        </section>
      </main>

      <footer className="bg-brand-green text-white py-12 border-t border-brand-greenLight">
        <div className="max-w-7xl mx-auto px-4 text-center opacity-80 text-sm">
          <p>&copy; 2024 Maktaba Muhammadiyya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
