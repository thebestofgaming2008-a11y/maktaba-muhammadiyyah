import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Shop All', href: '#' },
    { label: 'Books', href: '#', hasDropdown: true },
    { label: 'Contact', href: '#' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gray-100 text-xs text-center py-2.5 px-4 font-medium text-gray-600 tracking-wide border-b border-gray-200 relative z-50">
        <span className="font-bold mr-1">Important:</span> International orders may be subject to customs duties
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <X size={14} />
        </button>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b border-gray-100 bg-white/95 backdrop-blur-md ${
          isScrolled ? 'shadow-sm py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left: Navigation (Desktop) */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-gray-700 hover:text-brand-green transition-colors flex items-center gap-1 py-2"
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />}
                  </a>
                  
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-2 min-w-[200px]">
                        {['Qur’an & Mushaf', 'Tafsir', 'Hadith', 'Seerah', 'Arabic Learning', 'Children’s Books'].map((cat) => (
                          <a key={cat} href="#" className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-brand-stone hover:text-brand-green rounded-md transition-colors">
                            {cat}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* Center: Logo */}
            <div className="flex-1 md:flex-none flex flex-col items-center justify-center text-center">
              <a href="#" className="group">
                <h1 className="font-serif font-bold text-2xl md:text-3xl text-gray-900 tracking-tight group-hover:text-brand-green transition-colors">
                  Maktaba <span className="text-brand-green">Muhammadiyya</span>
                </h1>
              </a>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-2 md:gap-4">
              <button className="p-2 text-gray-600 hover:text-brand-green hover:bg-gray-50 rounded-full transition-all duration-200 group" aria-label="Search">
                <Search size={20} className="group-hover:scale-110 transition-transform" />
              </button>
              <button className="hidden md:block p-2 text-gray-600 hover:text-brand-green hover:bg-gray-50 rounded-full transition-all duration-200 group" aria-label="Account">
                <User size={20} className="group-hover:scale-110 transition-transform" />
              </button>
              <button className="p-2 text-gray-600 hover:text-brand-green hover:bg-gray-50 rounded-full transition-all duration-200 group relative" aria-label="Cart">
                <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
                <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 md:hidden backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-4 flex items-center justify-between border-b border-gray-100">
                <span className="font-serif font-bold text-xl text-brand-green">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <a key={link.label} href={link.href} className="px-6 py-4 text-lg font-medium text-gray-800 border-b border-gray-50 hover:bg-gray-50">
                      {link.label}
                    </a>
                  ))}
                  <div className="px-6 py-4">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Categories</p>
                    <div className="grid gap-4 pl-2">
                      {['Qur’an & Mushaf', 'Tafsir', 'Hadith', 'Seerah', 'Arabic Learning', 'Kids'].map((cat) => (
                        <a key={cat} href="#" className="text-gray-600 hover:text-brand-green flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div>
                           {cat}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
