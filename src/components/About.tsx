import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Wind, Sun } from 'lucide-react';

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Our Story</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-primary leading-tight">
          Where Freshness Meets Freedom
        </h2>
        <div className="space-y-6 text-ink/70 leading-relaxed text-lg">
          <p>
            KHOLA HAOWA, meaning "Open Breeze," was born from a simple desire: to create a dining space where the boundaries between nature and gastronomy dissolve. 
          </p>
          <p>
            Our philosophy is rooted in the purity of ingredients and the serenity of the outdoors. We source seasonal, organic produce directly from local farmers to bring you flavors that are as fresh as the breeze that flows through our terrace.
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Leaf size={24} />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold">Organic</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Wind size={24} />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold">Open Air</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
              <Sun size={24} />
            </div>
            <span className="text-xs uppercase tracking-widest font-bold">Sunlit</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1974" 
            alt="Nature Inspired Dining"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
      </motion.div>
    </div>
  );
}
