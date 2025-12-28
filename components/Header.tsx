import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, ShoppingCart, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollTo } from './SharedUI';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    smoothScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-brand-bg/95 backdrop-blur-md shadow-sm border-b border-brand-border' 
            : 'bg-brand-bg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-4 pt-4 md:pt-6">
          <div className="flex flex-col gap-4">
            
            {/* Row 1: Logo, Nav, Icons */}
            <div className="flex items-center justify-between">
                {/* Logo Image with Text Fallback */}
                <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group transition-transform active:scale-95 block">
                  {!logoError ? (
                    <img 
                      src="/logo2nd.jpg" 
                      alt="Maktaba Muhammadiyya" 
                      className="h-12 md:h-16 w-auto object-contain"
                      onError={(e) => {
                        setLogoError(true);
                        console.warn("LOGO MISSING: Please create a 'public' folder in your project root and place 'logo2nd.jpg' inside it.");
                      }}
                    />
                  ) : (
                    <div className="flex flex-col leading-tight">
                        <span className="font-serif text-2xl md:text-3xl font-bold text-brand-primary">
                           Maktaba
                        </span>
                        <span className="font-serif text-sm md:text-base tracking-widest uppercase text-brand-accent">
                           Muhammadiyya
                        </span>
                    </div>
                  )}
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                  <a href="#featured" onClick={(e) => handleNavClick(e, 'featured')} className="text-sm font-semibold uppercase tracking-wide text-brand-primary/80 hover:text-brand-primary transition-colors">Collection</a>
                  <a href="#categories" onClick={(e) => handleNavClick(e, 'categories')} className="text-sm font-semibold uppercase tracking-wide text-brand-primary/80 hover:text-brand-primary transition-colors">Genres</a>
                  <a href="#deals" onClick={(e) => handleNavClick(e, 'deals')} className="text-sm font-semibold uppercase tracking-wide text-brand-accent hover:text-brand-secondary transition-colors">Offers</a>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-2 md:gap-4">
                  <button className="hidden md:block p-2 text-brand-primary/70 hover:text-brand-primary transition-colors">
                    <User size={22} strokeWidth={1.5} />
                  </button>
                  <button className="p-2 text-brand-primary/70 hover:text-brand-primary transition-colors relative">
                    <ShoppingCart size={22} strokeWidth={1.5} />
                    <span className="absolute -top-0 -right-0 flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent text-[10px] font-bold text-white ring-2 ring-brand-bg">
                      2
                    </span>
                  </button>
                  <button 
                    className="md:hidden p-2 text-brand-primary"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <Menu size={24} strokeWidth={1.5} />
                  </button>
                </div>
            </div>

            {/* Row 2: Extended Search Bar */}
            <div className="w-full">
                <div className="relative group">
                    <input 
                        type="text" 
                        placeholder="Search by title, author, or ISBN..." 
                        className="w-full bg-white border border-brand-border rounded-lg px-4 py-3 pl-12 text-sm text-brand-primary placeholder:text-brand-muted/70 focus:outline-none focus:ring-1 focus:ring-brand-accent focus:border-brand-accent transition-all shadow-sm group-hover:shadow-md"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted group-hover:text-brand-primary transition-colors" size={18} />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded hover:bg-brand-secondary transition-colors">
                        Search
                    </button>
                </div>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-brand-bg flex flex-col shadow-2xl"
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
              <span className="font-serif text-2xl font-bold text-brand-primary">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              <a href="#featured" onClick={(e) => handleNavClick(e, 'featured')} className="text-xl font-serif text-brand-primary border-b border-gray-100 pb-4">Collection</a>
              <a href="#categories" onClick={(e) => handleNavClick(e, 'categories')} className="text-xl font-serif text-brand-primary border-b border-gray-100 pb-4">Browse Genres</a>
              <a href="#deals" onClick={(e) => handleNavClick(e, 'deals')} className="text-xl font-serif text-brand-accent border-b border-gray-100 pb-4">Special Offers</a>
              <a href="#bestsellers" onClick={(e) => handleNavClick(e, 'bestsellers')} className="text-xl font-serif text-brand-primary border-b border-gray-100 pb-4">Best Sellers</a>
              
              <div className="mt-auto pt-6">
                  <button className="w-full bg-brand-primary text-white py-4 rounded-lg font-bold uppercase tracking-widest text-sm mb-4">
                      My Account
                  </button>
                  <p className="text-center text-xs text-brand-muted">
                      Need help? <a href="#" className="underline">Contact Support</a>
                  </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};