import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Wind } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reserve', href: '#reservation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-500 ${
        scrolled ? 'bg-secondary/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="flex items-center gap-3 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Wind className={`w-6 h-6 transition-colors ${scrolled ? 'text-primary' : 'text-primary'}`} />
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-bold tracking-widest uppercase leading-none ${scrolled ? 'text-ink' : 'text-ink'}`}>
              KHOLA HAOWA
            </span>
            <span className="text-[10px] tracking-[0.4em] text-accent font-medium mt-0.5">
              খোলা হাওয়া
            </span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`text-sm uppercase tracking-widest font-medium hover:text-primary transition-colors ${
                scrolled ? 'text-ink/70' : 'text-ink/70'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#reservation"
            className="bg-primary text-secondary px-6 py-2 rounded-full text-sm uppercase tracking-widest font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-ink"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-b border-primary/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-serif text-ink/70 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#reservation"
                className="bg-primary text-secondary px-6 py-3 rounded-full text-center text-sm uppercase tracking-widest font-bold"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
