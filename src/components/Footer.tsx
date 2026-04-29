import React from 'react';
import { Wind } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary py-16 px-6 border-t border-primary/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <Wind className="w-6 h-6 text-primary" />
            <span className="text-xl font-serif font-bold tracking-widest uppercase text-ink">
              KHOLA HAOWA
            </span>
          </div>
          <p className="text-ink/50 text-sm max-w-xs">
            Where every leaf tells a story and every breeze brings a new flavor.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-primary">Explore</h4>
            <ul className="text-sm text-ink/60 space-y-2">
              <li><a href="#about" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Season Menu</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-primary">Hours</h4>
            <ul className="text-sm text-ink/60 space-y-2">
              <li>Mon - Fri: 12 PM - 11 PM</li>
              <li>Sat - Sun: 10 AM - 12 AM</li>
            </ul>
          </div>

          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h4 className="text-xs uppercase tracking-widest font-bold text-primary">Legal</h4>
            <ul className="text-sm text-ink/60 space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary/5 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-ink/30">
          &copy; {new Date().getFullYear()} KHOLA HAOWA. Built for Freedom.
        </p>
      </div>
    </footer>
  );
}
