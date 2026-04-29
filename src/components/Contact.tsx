import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="grid lg:grid-cols-2 gap-20">
      <div>
        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-secondary leading-tight">
          Find Us in the <br /> <span className="text-accent italic">Heart of Nature</span>
        </h2>
        
        <div className="space-y-10 mt-12">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 border border-secondary/20">
              <MapPin className="text-accent" />
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Location</h4>
              <p className="text-secondary/70">123 Garden Breeze Way, <br />Green Valley, GV 45678</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 border border-secondary/20">
              <Phone className="text-accent" />
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-2">Phone</h4>
              <p className="text-secondary/70">+1 (555) 789 1234 <br /> +1 (555) 789 5678</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 border border-secondary/20">
              <Mail className="text-accent" />
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-2">E-mail</h4>
              <p className="text-secondary/70">hello@kholahaowa.com <br /> bookings@kholahaowa.com</p>
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-16 pt-10 border-t border-secondary/10">
          <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-accent transition-colors"><Instagram size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-accent transition-colors"><Facebook size={18} /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center hover:bg-accent transition-colors"><Twitter size={18} /></a>
        </div>
      </div>

      <div className="h-[500px] rounded-3xl overflow-hidden glass shadow-2xl relative">
        {/* Map Location Image */}
        <img 
          src="/regenerated_image_1777453574293.png" 
          alt="Map Location" 
          className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div 
            className="w-8 h-8 bg-accent rounded-full border-4 border-secondary shadow-2xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
}
