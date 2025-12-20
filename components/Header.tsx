import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-white/80 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.04)] border-b border-gray-100' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="relative z-10 group">
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl md:text-3xl font-bold text-brand-primary tracking-tighter">
                  Maktaba.
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-medium mt-1 group-hover:text-brand-primary transition-colors">
                  Muhammadiyya
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {['Collection', 'Best Sellers', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-sm font-medium text-brand-primary/70 hover:text-brand-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-brand-primary after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-brand-primary/70 hover:text-brand-primary transition-colors">
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button className="p-2 text-brand-primary/70 hover:text-brand-primary transition-colors relative">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="absolute top-1.5 right-1 h-2 w-2 bg-brand-accent rounded-full ring-2 ring-white"></span>
              </button>
              <button 
                className="md:hidden p-2 text-brand-primary"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-brand-bg md:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
              <span className="font-serif text-xl font-bold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-6 text-2xl font-serif">
              <a href="#" className="block hover:text-brand-accent">Collection</a>
              <a href="#" className="block hover:text-brand-accent">Best Sellers</a>
              <a href="#" className="block hover:text-brand-accent">About</a>
              <a href="#" className="block hover:text-brand-accent">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
