import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const menuData = {
  Starters: [
    { name: 'Herb Crusted Burrata', price: '$16', description: 'Fresh burrata, basil pesto, heirloom tomatoes, grilled sourdough.' },
    { name: 'Crispy Artichokes', price: '$14', description: 'Wild honey glaze, toasted hazelnuts, lemon aioli.' },
    { name: 'Garden Green Gazpacho', price: '$12', description: 'Chilled cucumber, avocado, green apple, mint oil.' },
  ],
  'Main Course': [
    { name: 'Wild Mushroom Risotto', price: '$28', description: 'Arborio rice, porcini, truffle essence, aged parmesan.' },
    { name: 'Sea Salt Grilled Seabass', price: '$34', description: 'Fresh garden herbs, roasted root vegetables, citrus butter.' },
    { name: 'Earthy Vegetable Tagine', price: '$24', description: 'Saffron couscous, dried apricots, preserved lemons.' },
  ],
  Desserts: [
    { name: 'Lavender Panna Cotta', price: '$12', description: 'Honey macerated berries, edible flowers.' },
    { name: 'Dark Chocolate Cloud', price: '$14', description: 'Fluffy mousse, sea salt caramel, almond brittle.' },
  ],
  Beverages: [
    { name: 'Elderflower Spritz', price: '$14', description: 'Prosecco, elderflower liqueur, mint, cucumber.' },
    { name: 'Mint & Lime Chill', price: '$8', description: 'Fresh garden mint, lime, sparkling water.' },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>('Starters');

  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Gastronomy</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-primary">Seasonal Menu</h2>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 border-b border-primary/10 pb-6">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as any)}
            className={`text-sm uppercase tracking-[0.2em] font-bold transition-all relative pb-2 ${
              activeCategory === category ? 'text-primary' : 'text-ink/40'
            }`}
          >
            {category}
            {activeCategory === category && (
              <motion.div 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
              />
            )}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <motion.div 
        layout
        className="grid md:grid-cols-2 gap-x-12 gap-y-10 text-left"
      >
        <AnimatePresence mode="wait">
          {menuData[activeCategory].map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: idx * 0.1 }}
              className="group p-6 rounded-2xl hover:bg-secondary transition-all shadow-sm hover:shadow-xl border border-transparent hover:border-primary/5"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-serif text-primary group-hover:translate-x-1 transition-transform">
                  {item.name}
                </h3>
                <span className="text-accent font-bold font-sans">{item.price}</span>
              </div>
              <p className="text-ink/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
