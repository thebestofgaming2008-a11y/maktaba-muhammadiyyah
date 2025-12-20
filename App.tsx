import React, { useState } from 'react';
import { HeroType } from './types';
import { 
  HeroSearchFirst, 
  HeroSplitFeature, 
  HeroBrowseGrid, 
  HeroMinimalType, 
  HeroGuidedPathways, 
  HeroProductLed, 
  HeroSeasonal, 
  HeroBilingual 
} from './components/HeroVariants';

export default function App() {
  const [activeHero, setActiveHero] = useState<HeroType>(HeroType.SEARCH_FIRST);

  const renderHero = () => {
    switch (activeHero) {
      case HeroType.SEARCH_FIRST: return <HeroSearchFirst />;
      case HeroType.SPLIT_FEATURE: return <HeroSplitFeature />;
      case HeroType.BROWSE_GRID: return <HeroBrowseGrid />;
      case HeroType.MINIMAL_TYPE: return <HeroMinimalType />;
      case HeroType.GUIDED_PATHWAYS: return <HeroGuidedPathways />;
      case HeroType.PRODUCT_LED: return <HeroProductLed />;
      case HeroType.SEASONAL: return <HeroSeasonal />;
      case HeroType.BILINGUAL: return <HeroBilingual />;
      default: return <HeroSearchFirst />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation / Switcher */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 md:sticky md:top-0 md:bottom-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-serif font-bold text-brand-green text-xl hidden md:block">
            Design Studio
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
             {Object.values(HeroType).map((type) => (
               <button
                 key={type}
                 onClick={() => setActiveHero(type)}
                 className={`px-3 py-1.5 rounded text-xs md:text-sm font-medium transition-all duration-200 ${
                   activeHero === type 
                     ? 'bg-brand-green text-white shadow-md' 
                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                 }`}
               >
                 {type}
               </button>
             ))}
          </div>
          
          <div className="hidden md:block text-xs text-gray-400">
             Maktaba Muhammadiyya
          </div>
        </div>
      </nav>

      {/* Main Preview Area */}
      <main className="w-full relative pb-24 md:pb-0">
         {/* Badge showing current prompt */}
         <div className="absolute top-4 left-4 z-40 bg-black/75 text-white text-xs px-3 py-1 rounded backdrop-blur-sm pointer-events-none">
            Viewing: {activeHero}
         </div>

         {renderHero()}

         {/* Context description block (simulating content below hero) */}
         <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-dashed border-gray-300 mt-12 opacity-50">
            <div className="text-center text-gray-400 mb-8">
              <p className="uppercase tracking-widest text-xs font-bold mb-2">Website Content Starts Here</p>
              <p className="text-sm">The hero section ends above. This area simulates the fold line.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className="h-32 bg-gray-100 rounded animate-pulse"></div>
               ))}
            </div>
         </div>
      </main>
    </div>
  );
}