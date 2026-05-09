import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Casos', href: '#transformations' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:py-5',
        (isScrolled || isMobileMenuOpen) 
          ? 'bg-deep-black/80 backdrop-blur-2xl border-b border-white/5 py-3 md:py-4 shadow-2xl text-white' 
          : 'bg-transparent text-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between min-h-[50px] md:min-h-[70px] relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <a href="#home" className="flex items-center group">
            <img 
              src="https://lh3.googleusercontent.com/d/1C7IN4wDSUx9L2dwoK8UjzpK3FVslrLvv" 
              alt="Leonardo Negri Logo" 
              className="w-44 md:w-72 h-auto object-contain transition-transform duration-300 group-hover:scale-105 shadow-gold/5"
              id="logo-header"
            />
          </a>
        </div>
        
        {/* Empty div to preserve space for the logo if needed, or just let it be absolute */}
        <div className="w-44 md:w-72 invisible pointer-events-none" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:text-gold relative group text-white/80"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              "px-10 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-700 shadow-2xl",
              isScrolled 
                ? "bg-gold text-deep-black hover:bg-gold-light hover:shadow-gold/20" 
                : "bg-white/[0.05] backdrop-blur-md border border-white/[0.1] text-white hover:bg-white hover:text-deep-black shadow-white/5"
            )}
          >
            Agendar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors",
            isScrolled ? "hover:bg-deep-black/5" : "hover:bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-deep-black/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden md:hidden"
          >
            <div className="p-8 flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl font-serif italic text-white hover:text-gold transition-colors flex items-center justify-between group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-gold text-deep-black py-5 rounded-2xl text-center text-sm uppercase tracking-widest font-bold shadow-xl shadow-gold/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Agendar Consultoria
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
