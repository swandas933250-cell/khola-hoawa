import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" 
            alt="Restaurant Ambiance"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Breezy Overlays */}
        <motion.div 
          className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-secondary to-transparent z-10"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Floating Curtains/Elements simulation */}
        <div className="absolute inset-0 flex justify-between pointer-events-none px-20">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-px h-full bg-primary/20 origin-top"
              animate={{ 
                rotate: [0, 2, -1, 0],
                skewX: [0, 5, -2, 0]
              }}
              transition={{ 
                duration: 5 + i, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-6 block">
            Welcome to
          </span>
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif leading-tight">
              KHOLA HAOWA
            </h1>
            <span className="text-xl md:text-2xl text-accent font-medium tracking-[0.5em] mt-2 block uppercase">
              খোলা হাওয়া
            </span>
          </div>
          <p className="text-xl md:text-2xl text-ink/70 font-light italic mb-12 max-w-2xl mx-auto leading-relaxed">
            “Experience the Taste of Open Air and Freedom.”
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#menu"
              className="px-10 py-4 bg-primary text-secondary rounded-full uppercase tracking-widest text-sm font-bold shadow-2xl hover:bg-primary/90 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Menu
            </motion.a>
            <motion.a
              href="#reservation"
              className="px-10 py-4 border border-primary text-primary rounded-full uppercase tracking-widest text-sm font-bold hover:bg-primary hover:text-secondary transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve a Table
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-primary"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </div>
  );
}
