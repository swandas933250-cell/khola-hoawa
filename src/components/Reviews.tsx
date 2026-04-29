import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Elena Richardson",
    role: "Food Enthusiast",
    content: "The breeziest dining experience I've ever had. You can literally feel the stress melting away as you sit under the hanging vines. The Seabass is divine.",
  },
  {
    name: "Marcus Thorne",
    role: "Travel Blogger",
    content: "Khola Haowa isn't just a restaurant; it's a sanctuary. The architecture perfectly captures the wind, and the flavors are incredibly fresh.",
  },
  {
    name: "Sarah Chen",
    role: "Local Patron",
    content: "Simple, elegant, and refreshing. The transition from the busy city to this calm, open-air haven is magical. Exactly what the name promises.",
  }
];

export default function Reviews() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">Testimonials</span>
        <h2 className="text-4xl font-serif text-primary">Voices of Our Guests</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((review, i) => (
          <motion.div
            key={review.name}
            className="bg-secondary p-8 rounded-3xl shadow-lg border border-primary/5 flex flex-col items-center text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="absolute top-4 right-4 opacity-5 text-primary">
              <Quote size={64} />
            </div>
            
            <p className="text-ink/70 italic leading-relaxed mb-8 relative z-10">
              "{review.content}"
            </p>
            
            <div className="mt-auto">
              <h4 className="font-serif text-xl text-primary">{review.name}</h4>
              <p className="text-xs uppercase tracking-widest text-accent font-bold mt-1">{review.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
