import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=2070', // Turkish-inspired high quality food photography
  'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2074',
  'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2070',
];

export default function Gallery() {
  return (
    <div>
      <div className="text-center mb-16">
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Visual Experience</span>
        <h2 className="text-4xl font-serif text-primary">Through Our Lens</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 overflow-hidden">
        {galleryImages.map((src, i) => (
          <motion.div
            key={i}
            className="relative aspect-square overflow-hidden rounded-lg group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <img 
              src={src} 
              alt={`Gallery ${i}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-secondary uppercase tracking-widest text-xs font-bold border border-secondary px-4 py-2">View Experience</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
