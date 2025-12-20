import React from 'react';
import { Search, ShoppingBag, BookOpen, CheckCircle, Truck, ShieldCheck, ArrowRight, Library, GraduationCap, Baby, Calendar } from 'lucide-react';
import { ButtonPrimary, ButtonSecondary, ButtonTertiary, CategoryChip, GeometricPattern, TrustBullet, BookPlaceholder } from './SharedUI';

// --- 1. Search First Hero ---
export const HeroSearchFirst: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center bg-brand-cream overflow-hidden">
      <GeometricPattern className="text-brand-gold" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-4 leading-tight">
          Authentic Islamic Books for <br className="hidden md:block"/> Every Stage of Learning
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl">
          Qur’an, Tafsir, Hadith, Seerah, Arabic learning, and children’s books—carefully curated.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-2xl relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 border-2 border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-brand-green transition duration-150 ease-in-out text-base shadow-sm"
            placeholder="Search titles, authors, topics..."
            aria-label="Search the catalog"
          />
        </div>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["Qur’an & Mushaf", "Tafsir", "Hadith", "Seerah", "Arabic", "Kids", "New Arrivals"].map((cat) => (
            <CategoryChip key={cat} label={cat} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
          <ButtonPrimary>Search the Catalog</ButtonPrimary>
          <ButtonSecondary>Shop Bestsellers</ButtonSecondary>
          <ButtonTertiary>Browse Collections</ButtonTertiary>
        </div>

        {/* Trust Strip */}
        <div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-gray-200/60 w-full max-w-lg">
          <TrustBullet icon={<BookOpen size={16} />} text="Curated editions" />
          <TrustBullet icon={<ShieldCheck size={16} />} text="Secure checkout" />
          <TrustBullet icon={<Truck size={16} />} text="Fast shipping" />
        </div>
      </div>
    </section>
  );
};

// --- 2. Split Feature Hero ---
export const HeroSplitFeature: React.FC = () => {
  return (
    <section className="relative w-full min-h-[600px] flex items-center bg-brand-cream overflow-hidden">
      <GeometricPattern className="text-brand-green opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Dominant) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-brand-text mb-6 leading-[1.1]">
              Build Your Library <br/> With Confidence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Reliable Islamic titles, thoughtfully organized—start with bestsellers or browse by topic.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <ButtonPrimary className="w-full sm:w-auto">Shop Bestsellers</ButtonPrimary>
              <ButtonSecondary className="w-full sm:w-auto">Browse Collections</ButtonSecondary>
            </div>

            <div className="flex gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1"><CheckCircle size={14} className="text-brand-gold"/> Curated selections</span>
              <span className="flex items-center gap-1"><CheckCircle size={14} className="text-brand-gold"/> Secure checkout</span>
              <span className="flex items-center gap-1"><CheckCircle size={14} className="text-brand-gold"/> Friendly support</span>
            </div>
          </div>

          {/* Right Column (Secondary Card) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-full -mr-10 -mt-10"></div>
              
              <span className="text-xs font-bold tracking-widest text-brand-gold uppercase mb-2 block">Featured Collection</span>
              <h2 className="text-2xl font-serif font-bold text-brand-green mb-2">Beginner’s Library</h2>
              <p className="text-gray-600 mb-6 text-sm">Foundations of belief, prayer, and character.</p>
              
              <div className="flex justify-center gap-4 mb-6 py-4 bg-brand-stone/50 rounded-lg">
                 <BookPlaceholder title="Ideal Muslim" height="h-28" />
                 <BookPlaceholder title="Fortress" height="h-28" color="bg-blue-900" />
                 <BookPlaceholder title="Prayer Guide" height="h-28" color="bg-emerald-900" />
              </div>

              <div className="text-center">
                <button className="text-sm font-semibold text-brand-green border border-brand-green/30 px-4 py-2 rounded hover:bg-brand-green hover:text-white transition-all w-full">
                  View Collection
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 3. Browse Grid Hero ---
export const HeroBrowseGrid: React.FC = () => {
  const categories = [
    { name: "Qur’an & Mushaf", icon: <BookOpen size={20} /> },
    { name: "Tafsir", icon: <Library size={20} /> },
    { name: "Hadith", icon: <GraduationCap size={20} /> },
    { name: "Seerah", icon: <UserIcon /> },
    { name: "Arabic Learning", icon: <LanguagesIcon /> },
    { name: "Children’s Books", icon: <Baby size={20} /> },
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-brand-cream overflow-hidden">
      <GeometricPattern className="text-gray-900 opacity-[0.02]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-text mb-6">
              Find the Right Book <br/> in One Click
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Explore trusted categories—beginner to advanced—carefully curated for clarity and benefit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary>Browse All Categories</ButtonPrimary>
              <ButtonSecondary>Shop New Arrivals</ButtonSecondary>
            </div>
          </div>

          {/* Grid */}
          <div className="relative">
             <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Popular right now</p>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
               {categories.map((cat, idx) => (
                 <a key={idx} href="#" className="flex flex-col items-center justify-center p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-brand-green/30 hover:-translate-y-1 transition-all group aspect-square">
                   <div className="w-12 h-12 bg-brand-stone rounded-full flex items-center justify-center text-brand-green mb-3 group-hover:bg-brand-green group-hover:text-white transition-colors">
                     {cat.icon}
                   </div>
                   <span className="text-sm font-medium text-gray-900 text-center">{cat.name}</span>
                 </a>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 4. Minimal Typographic Hero ---
export const HeroMinimalType: React.FC = () => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight mb-6">
            Maktaba Muhammadiyya
          </h1>
          <div className="w-20 h-1 bg-brand-gold mb-8"></div>
          
          <p className="text-xl md:text-2xl text-gray-500 font-light mb-10 leading-relaxed">
            A modern Islamic bookstore for Qur’an, Tafsir, Hadith, Seerah, Arabic, and children’s learning.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center mb-16">
            <ButtonPrimary className="bg-gray-900 hover:bg-black text-white px-8">Browse Collections</ButtonPrimary>
            <a href="#" className="text-lg font-medium text-gray-900 border-b border-gray-900 pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
              Shop Bestsellers
            </a>
          </div>
        </div>

        {/* Social Proof Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
           <div>
             <p className="font-serif text-lg text-gray-900">Trusted by readers worldwide</p>
           </div>
           <div>
             <p className="font-serif text-lg text-gray-900">Carefully curated editions</p>
           </div>
           <div>
             <p className="font-serif text-lg text-gray-900">Fast, secure checkout</p>
           </div>
        </div>

      </div>
    </section>
  );
};

// --- 5. Guided Pathways Hero ---
export const HeroGuidedPathways: React.FC = () => {
  return (
    <section className="relative w-full py-16 bg-brand-cream/50">
      <GeometricPattern className="text-brand-green opacity-[0.03]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-text mb-4">
          Choose Your Starting Point
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-xl">
          Curated collections to help you find the right book without guessing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
          
          {/* Card 1 */}
          <button className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-brand-green hover:shadow-md transition-all text-left">
             <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform">
                <BookOpen size={24} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">I’m New</h3>
             <p className="text-gray-500 mb-4">Start with essentials and beginner-friendly reads.</p>
             <span className="text-sm font-semibold text-brand-green flex items-center gap-1">Beginner's Library <ArrowRight size={14}/></span>
          </button>

          {/* Card 2 */}
          <button className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-brand-green hover:shadow-md transition-all text-left">
             <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-brand-gold mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">I’m Studying</h3>
             <p className="text-gray-500 mb-4">Go deeper with Tafsir, Hadith, and Arabic resources.</p>
             <span className="text-sm font-semibold text-brand-green flex items-center gap-1">Study & Reference <ArrowRight size={14}/></span>
          </button>

          {/* Card 3 */}
          <button className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-brand-green hover:shadow-md transition-all text-left">
             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                <Baby size={24} />
             </div>
             <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">For Kids</h3>
             <p className="text-gray-500 mb-4">Stories and learning for young readers.</p>
             <span className="text-sm font-semibold text-brand-green flex items-center gap-1">Kids Collection <ArrowRight size={14}/></span>
          </button>

        </div>

        <div className="flex flex-col items-center gap-4">
          <ButtonPrimary>Browse All Books</ButtonPrimary>
          <a href="#" className="text-sm text-gray-500 underline hover:text-brand-green">Search the catalog</a>
        </div>

      </div>
    </section>
  );
};

// --- 6. Product Led Hero ---
export const HeroProductLed: React.FC = () => {
  return (
    <section className="relative w-full bg-brand-cream border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-brand-text mb-6">
            Bestselling Islamic Books, <span className="text-brand-green">Carefully Curated</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Discover reliable titles across Qur’an, Tafsir, Hadith, Seerah, Arabic, and kids’ learning.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <ButtonPrimary>Shop Bestsellers</ButtonPrimary>
            <ButtonSecondary>Browse Collections</ButtonSecondary>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <TrustBullet icon={<CheckCircle size={16}/>} text="Curated selections" />
            <TrustBullet icon={<ShieldCheck size={16}/>} text="Secure checkout" />
            <TrustBullet icon={<Truck size={16}/>} text="Fast shipping" />
          </div>
        </div>

        {/* Right Content / Bottom Strip Visualization - Moved to right for desktop, bottom for mobile in a real grid but prompting asked for a strip below fold line. Let's adapt to fit "Hero" view effectively. We will place it 'below' visually but within the flex structure. */}
        <div className="w-full">
           <div className="bg-white/50 rounded-xl p-6 border border-brand-green/10">
              <div className="flex items-center justify-between mb-4">
                 <span className="text-sm font-bold uppercase tracking-wide text-gray-400">Bestsellers this week</span>
                 <a href="#" className="text-sm text-brand-green hover:underline">View all</a>
              </div>
              
              {/* Horizontal Scroll Area */}
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                 <div className="snap-center shrink-0">
                    <BookPlaceholder title="Sealed Nectar" height="h-36 md:h-48" />
                 </div>
                 <div className="snap-center shrink-0">
                    <BookPlaceholder title="Timeless Seeds" height="h-36 md:h-48" color="bg-blue-800" />
                 </div>
                 <div className="snap-center shrink-0">
                    <BookPlaceholder title="Quran English" height="h-36 md:h-48" color="bg-emerald-900" />
                 </div>
                 <div className="snap-center shrink-0">
                    <BookPlaceholder title="Don't Be Sad" height="h-36 md:h-48" color="bg-amber-700" />
                 </div>
                 <div className="snap-center shrink-0">
                    <BookPlaceholder title="Stories of Prophets" height="h-36 md:h-48" color="bg-teal-700" />
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

// --- 7. Seasonal Hero ---
export const HeroSeasonal: React.FC = () => {
  return (
    <section className="relative w-full py-20 bg-emerald-900 overflow-hidden text-white">
      {/* Background motif */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <svg width="600" height="600" viewBox="0 0 200 200">
           <path d="M100 0 A100 100 0 0 1 100 200 A100 100 0 0 1 100 0 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-white/10 text-brand-goldLight text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Seasonal Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
              Reading That Fits <br/> the Season
            </h1>
            <p className="text-lg text-emerald-100/80 mb-8 max-w-lg">
              Curated titles for reflection, learning, and family reading—shop the season or browse all collections.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-brand-gold text-emerald-950 px-8 py-3 rounded-md font-bold hover:bg-white transition-colors">
                Shop Seasonal Picks
              </button>
              <button className="border border-emerald-400 text-emerald-50 px-8 py-3 rounded-md font-medium hover:bg-emerald-800 transition-colors">
                Browse Collections
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative">
               <div className="flex items-center gap-2 mb-6 text-brand-goldLight">
                 <Calendar size={18} />
                 <span className="text-sm font-semibold">Ramadan Essentials</span>
               </div>
               
               <div className="flex justify-center gap-4">
                 <div className="transform rotate-[-6deg] translate-y-2">
                   <BookPlaceholder title="Productive Ramadan" height="h-32" color="bg-green-800" />
                 </div>
                 <div className="z-10 transform scale-110 shadow-2xl">
                   <BookPlaceholder title="30 Days of Reflection" height="h-32" color="bg-emerald-950" />
                 </div>
                 <div className="transform rotate-[6deg] translate-y-2">
                   <BookPlaceholder title="Du'a Book" height="h-32" color="bg-amber-700" />
                 </div>
               </div>
               
               <div className="mt-8 text-center">
                 <a href="#" className="text-sm text-emerald-200 hover:text-white underline decoration-emerald-500/50 underline-offset-4">View All Seasonal Books</a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- 8. Bilingual Hero ---
export const HeroBilingual: React.FC = () => {
  return (
    <section className="relative w-full py-24 bg-brand-stone">
      <GeometricPattern className="text-brand-green opacity-[0.04]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h1 className="flex flex-col items-center gap-4 mb-8">
          <span className="text-5xl md:text-6xl font-serif font-bold text-brand-text tracking-tight">
            Maktaba Muhammadiyya
          </span>
          <span className="text-3xl md:text-4xl font-arabic text-brand-green mt-2" dir="rtl">
            مكتبة محمدية
          </span>
        </h1>
        
        <div className="w-16 h-1 bg-brand-gold mx-auto mb-8 rounded-full"></div>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
          Curated Islamic books across Qur’an, Tafsir, Hadith, Seerah, Arabic learning, and children’s titles.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["Qur’an", "Tafsir", "Hadith", "Seerah", "Arabic", "Kids"].map((cat) => (
             <span key={cat} className="px-4 py-1 border border-brand-green/20 rounded-full text-brand-green text-sm hover:bg-brand-green hover:text-white cursor-pointer transition-colors">
               {cat}
             </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <ButtonPrimary className="min-w-[160px]">Browse Collections</ButtonPrimary>
          <ButtonSecondary className="min-w-[160px]">Shop Bestsellers</ButtonSecondary>
        </div>

      </div>
    </section>
  );
};

// Helper components for Icons not in lucide defaults or need custom
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
)

const LanguagesIcon = () => (
   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
)
